import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from './utils/hooks/withApollo.tsx';













export async function getServerPageOnChatMessage
    (options: Omit<Apollo.QueryOptions<Types.OnChatMessageSubscriptionVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.OnChatMessageSubscription>({ ...options, query: Operations.OnChatMessageDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useOnChatMessage = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.OnChatMessageSubscription, Types.OnChatMessageSubscriptionVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.OnChatMessageDocument, options);
};
export type PageOnChatMessageComp = React.FC<{data?: Types.OnChatMessageSubscription, error?: Apollo.ApolloError}>;
export const withPageOnChatMessage = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.OnChatMessageSubscription, Types.OnChatMessageSubscriptionVariables>) => (WrappedComponent:PageOnChatMessageComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.OnChatMessageDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrOnChatMessage = {
      getServerPage: getServerPageOnChatMessage,
      withPage: withPageOnChatMessage,
      usePage: useOnChatMessage,
    }
export async function getServerPageFindChatMessages
    (options: Omit<Apollo.QueryOptions<Types.FindChatMessagesQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.FindChatMessagesQuery>({ ...options, query: Operations.FindChatMessagesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useFindChatMessages = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindChatMessagesQuery, Types.FindChatMessagesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.FindChatMessagesDocument, options);
};
export type PageFindChatMessagesComp = React.FC<{data?: Types.FindChatMessagesQuery, error?: Apollo.ApolloError}>;
export const withPageFindChatMessages = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindChatMessagesQuery, Types.FindChatMessagesQueryVariables>) => (WrappedComponent:PageFindChatMessagesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.FindChatMessagesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrFindChatMessages = {
      getServerPage: getServerPageFindChatMessages,
      withPage: withPageFindChatMessages,
      usePage: useFindChatMessages,
    }
export async function getServerPageFindAllMessages
    (options: Omit<Apollo.QueryOptions<Types.FindAllMessagesQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.FindAllMessagesQuery>({ ...options, query: Operations.FindAllMessagesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useFindAllMessages = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindAllMessagesQuery, Types.FindAllMessagesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.FindAllMessagesDocument, options);
};
export type PageFindAllMessagesComp = React.FC<{data?: Types.FindAllMessagesQuery, error?: Apollo.ApolloError}>;
export const withPageFindAllMessages = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindAllMessagesQuery, Types.FindAllMessagesQueryVariables>) => (WrappedComponent:PageFindAllMessagesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.FindAllMessagesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrFindAllMessages = {
      getServerPage: getServerPageFindAllMessages,
      withPage: withPageFindAllMessages,
      usePage: useFindAllMessages,
    }
export async function getServerPageSessions
    (options: Omit<Apollo.QueryOptions<Types.SessionsQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.SessionsQuery>({ ...options, query: Operations.SessionsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useSessions = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.SessionsQuery, Types.SessionsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.SessionsDocument, options);
};
export type PageSessionsComp = React.FC<{data?: Types.SessionsQuery, error?: Apollo.ApolloError}>;
export const withPageSessions = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.SessionsQuery, Types.SessionsQueryVariables>) => (WrappedComponent:PageSessionsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.SessionsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrSessions = {
      getServerPage: getServerPageSessions,
      withPage: withPageSessions,
      usePage: useSessions,
    }
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
export async function getServerPageCounselors
    (options: Omit<Apollo.QueryOptions<Types.CounselorsQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.CounselorsQuery>({ ...options, query: Operations.CounselorsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useCounselors = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.CounselorsQuery, Types.CounselorsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.CounselorsDocument, options);
};
export type PageCounselorsComp = React.FC<{data?: Types.CounselorsQuery, error?: Apollo.ApolloError}>;
export const withPageCounselors = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.CounselorsQuery, Types.CounselorsQueryVariables>) => (WrappedComponent:PageCounselorsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.CounselorsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrCounselors = {
      getServerPage: getServerPageCounselors,
      withPage: withPageCounselors,
      usePage: useCounselors,
    }
export async function getServerPageGetOneCounselor
    (options: Omit<Apollo.QueryOptions<Types.GetOneCounselorQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetOneCounselorQuery>({ ...options, query: Operations.GetOneCounselorDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetOneCounselor = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetOneCounselorQuery, Types.GetOneCounselorQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetOneCounselorDocument, options);
};
export type PageGetOneCounselorComp = React.FC<{data?: Types.GetOneCounselorQuery, error?: Apollo.ApolloError}>;
export const withPageGetOneCounselor = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetOneCounselorQuery, Types.GetOneCounselorQueryVariables>) => (WrappedComponent:PageGetOneCounselorComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetOneCounselorDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetOneCounselor = {
      getServerPage: getServerPageGetOneCounselor,
      withPage: withPageGetOneCounselor,
      usePage: useGetOneCounselor,
    }
export async function getServerPageCurrentUser
    (options: Omit<Apollo.QueryOptions<Types.CurrentUserQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.CurrentUserQuery>({ ...options, query: Operations.CurrentUserDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useCurrentUser = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.CurrentUserDocument, options);
};
export type PageCurrentUserComp = React.FC<{data?: Types.CurrentUserQuery, error?: Apollo.ApolloError}>;
export const withPageCurrentUser = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>) => (WrappedComponent:PageCurrentUserComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.CurrentUserDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrCurrentUser = {
      getServerPage: getServerPageCurrentUser,
      withPage: withPageCurrentUser,
      usePage: useCurrentUser,
    }
export async function getServerPageMe
    (options: Omit<Apollo.QueryOptions<Types.MeQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.MeQuery>({ ...options, query: Operations.MeDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useMe = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.MeQuery, Types.MeQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.MeDocument, options);
};
export type PageMeComp = React.FC<{data?: Types.MeQuery, error?: Apollo.ApolloError}>;
export const withPageMe = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.MeQuery, Types.MeQueryVariables>) => (WrappedComponent:PageMeComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.MeDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrMe = {
      getServerPage: getServerPageMe,
      withPage: withPageMe,
      usePage: useMe,
    }
export async function getServerPageCounselor
    (options: Omit<Apollo.QueryOptions<Types.CounselorQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.CounselorQuery>({ ...options, query: Operations.CounselorDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useCounselor = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.CounselorQuery, Types.CounselorQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.CounselorDocument, options);
};
export type PageCounselorComp = React.FC<{data?: Types.CounselorQuery, error?: Apollo.ApolloError}>;
export const withPageCounselor = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.CounselorQuery, Types.CounselorQueryVariables>) => (WrappedComponent:PageCounselorComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.CounselorDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrCounselor = {
      getServerPage: getServerPageCounselor,
      withPage: withPageCounselor,
      usePage: useCounselor,
    }
export async function getServerPageStaff
    (options: Omit<Apollo.QueryOptions<Types.StaffQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.StaffQuery>({ ...options, query: Operations.StaffDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useStaff = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.StaffQuery, Types.StaffQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.StaffDocument, options);
};
export type PageStaffComp = React.FC<{data?: Types.StaffQuery, error?: Apollo.ApolloError}>;
export const withPageStaff = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.StaffQuery, Types.StaffQueryVariables>) => (WrappedComponent:PageStaffComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.StaffDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrStaff = {
      getServerPage: getServerPageStaff,
      withPage: withPageStaff,
      usePage: useStaff,
    }