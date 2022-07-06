import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { NextPage } from "next";
import React from "react";
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from '@apollo/client/link/ws';



/* eslint-disable */

const parseHeaders = (rawHeaders: any): Headers => {
  const headers = new Headers();
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
  preProcessedHeaders.split(/\r?\n/).forEach((line: any) => {
    const parts = line.split(":");
    const key = parts.shift().trim();
    if (key) {
      const value = parts.join(":").trim();
      headers.append(key, value);
    }
  });
  return headers;
};

export const uploadFetch = (url: string, options: any): Promise<any> =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = (): any => {
      const opts: any = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || ""),
      };
      opts.url =
        "responseURL" in xhr
          ? xhr.responseURL
          : opts.headers.get("X-Request-URL");
      const body = "response" in xhr ? xhr.response : (xhr as any).responseText;
      resolve(new Response(body, opts));
    };
    xhr.onerror = () => {
      reject(new TypeError("Network request failed"));
    };
    xhr.ontimeout = () => {
      reject(new TypeError("Network request failed"));
    };
    xhr.open(options.method, url, true);

    Object.keys(options.headers).forEach((key) => {
      xhr.setRequestHeader(key, options.headers[key]);
    });

    if (xhr.upload) {
      xhr.upload.onprogress = options.onProgress;
    }

    options.onAbortPossible(() => {
      xhr.abort();
    });

    xhr.send(options.body);
  });

const customFetch = (uri: any, options: any): any => {
  if (options.useUpload) {
    return uploadFetch(uri, options);
  }
  return fetch(uri, options);
};

export const withApollo = (Comp: NextPage) => (props: any) => {
  return (
    <ApolloProvider client={getApolloClient(props.apolloState)}>
      <Comp />
    </ApolloProvider>
  );
};
export const isBrowser: boolean = (process as any).browser;

const getProductionUrl = () => {
  return isBrowser ? `https://${process.env.NEXT_PUBLIC_URL}` : `http://${process.env.NEXT_PUBLIC_URL_SERVER}`
}

export const httpLink = new HttpLink({

  uri: process.env.NODE_ENV === 'production' ? getProductionUrl() : `http://localhost:3001/graphql`,
})


export const wsLink = isBrowser ? new SubscriptionClient(
  process.env.NODE_ENV === 'production' ? `ws://${process.env.NEXT_PUBLIC_URL}` : `ws://localhost:3001/graphql`,
  {
    reconnect: true,
    // connectionParams: {
    //   authorization: getTokenFromCookie() ? `Bearer ${getTokenFromCookie()}` : '',
    // }
  }) : null;

export const getApolloClient = (initialState?: NormalizedCacheObject): ApolloClient<any> => {

  const cache = new InMemoryCache().restore(initialState || {});

  const link = isBrowser ? split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    new WebSocketLink(wsLink),
    httpLink
  ) : httpLink;

  return new ApolloClient({
    link: link,
    cache: cache,
    ssrMode: !isBrowser
  })
};


