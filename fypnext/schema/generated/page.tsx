import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from './utils/hooks/withApollo.tsx';

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