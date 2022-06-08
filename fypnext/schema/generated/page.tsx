import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from './utils/hooks/withApollo.tsx';








export async function getServerPageEvents
    (options: Omit<Apollo.QueryOptions<Types.EventsQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.EventsQuery>({ ...options, query: Operations.EventsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useEvents = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.EventsQuery, Types.EventsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.EventsDocument, options);
};
export type PageEventsComp = React.FC<{data?: Types.EventsQuery, error?: Apollo.ApolloError}>;
export const withPageEvents = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.EventsQuery, Types.EventsQueryVariables>) => (WrappedComponent:PageEventsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.EventsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrEvents = {
      getServerPage: getServerPageEvents,
      withPage: withPageEvents,
      usePage: useEvents,
    }
export async function getServerPageFaqs
    (options: Omit<Apollo.QueryOptions<Types.FaqsQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.FaqsQuery>({ ...options, query: Operations.FaqsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useFaqs = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FaqsQuery, Types.FaqsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.FaqsDocument, options);
};
export type PageFaqsComp = React.FC<{data?: Types.FaqsQuery, error?: Apollo.ApolloError}>;
export const withPageFaqs = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FaqsQuery, Types.FaqsQueryVariables>) => (WrappedComponent:PageFaqsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.FaqsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrFaqs = {
      getServerPage: getServerPageFaqs,
      withPage: withPageFaqs,
      usePage: useFaqs,
    }
export async function getServerPageUsers
    (options: Omit<Apollo.QueryOptions<Types.UsersQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.UsersQuery>({ ...options, query: Operations.UsersDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useUsers = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.UsersQuery, Types.UsersQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.UsersDocument, options);
};
export type PageUsersComp = React.FC<{data?: Types.UsersQuery, error?: Apollo.ApolloError}>;
export const withPageUsers = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.UsersQuery, Types.UsersQueryVariables>) => (WrappedComponent:PageUsersComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.UsersDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrUsers = {
      getServerPage: getServerPageUsers,
      withPage: withPageUsers,
      usePage: useUsers,
    }