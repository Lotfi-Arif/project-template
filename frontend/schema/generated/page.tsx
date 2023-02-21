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
export async function getServerPageFindOneChat
    (options: Omit<Apollo.QueryOptions<Types.FindOneChatQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.FindOneChatQuery>({ ...options, query: Operations.FindOneChatDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useFindOneChat = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindOneChatQuery, Types.FindOneChatQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.FindOneChatDocument, options);
};
export type PageFindOneChatComp = React.FC<{data?: Types.FindOneChatQuery, error?: Apollo.ApolloError}>;
export const withPageFindOneChat = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindOneChatQuery, Types.FindOneChatQueryVariables>) => (WrappedComponent:PageFindOneChatComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.FindOneChatDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrFindOneChat = {
      getServerPage: getServerPageFindOneChat,
      withPage: withPageFindOneChat,
      usePage: useFindOneChat,
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
export async function getServerPageFindOneCounselor
    (options: Omit<Apollo.QueryOptions<Types.FindOneCounselorQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.FindOneCounselorQuery>({ ...options, query: Operations.FindOneCounselorDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useFindOneCounselor = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindOneCounselorQuery, Types.FindOneCounselorQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.FindOneCounselorDocument, options);
};
export type PageFindOneCounselorComp = React.FC<{data?: Types.FindOneCounselorQuery, error?: Apollo.ApolloError}>;
export const withPageFindOneCounselor = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindOneCounselorQuery, Types.FindOneCounselorQueryVariables>) => (WrappedComponent:PageFindOneCounselorComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.FindOneCounselorDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrFindOneCounselor = {
      getServerPage: getServerPageFindOneCounselor,
      withPage: withPageFindOneCounselor,
      usePage: useFindOneCounselor,
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
export async function getServerPageEvent
    (options: Omit<Apollo.QueryOptions<Types.EventQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.EventQuery>({ ...options, query: Operations.EventDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useEvent = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.EventQuery, Types.EventQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.EventDocument, options);
};
export type PageEventComp = React.FC<{data?: Types.EventQuery, error?: Apollo.ApolloError}>;
export const withPageEvent = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.EventQuery, Types.EventQueryVariables>) => (WrappedComponent:PageEventComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.EventDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrEvent = {
      getServerPage: getServerPageEvent,
      withPage: withPageEvent,
      usePage: useEvent,
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
export async function getServerPageFindAllPosts
    (options: Omit<Apollo.QueryOptions<Types.FindAllPostsQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.FindAllPostsQuery>({ ...options, query: Operations.FindAllPostsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useFindAllPosts = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindAllPostsQuery, Types.FindAllPostsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.FindAllPostsDocument, options);
};
export type PageFindAllPostsComp = React.FC<{data?: Types.FindAllPostsQuery, error?: Apollo.ApolloError}>;
export const withPageFindAllPosts = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.FindAllPostsQuery, Types.FindAllPostsQueryVariables>) => (WrappedComponent:PageFindAllPostsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.FindAllPostsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrFindAllPosts = {
      getServerPage: getServerPageFindAllPosts,
      withPage: withPageFindAllPosts,
      usePage: useFindAllPosts,
    }
export async function getServerPagePost
    (options: Omit<Apollo.QueryOptions<Types.PostQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.PostQuery>({ ...options, query: Operations.PostDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const usePost = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.PostQuery, Types.PostQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.PostDocument, options);
};
export type PagePostComp = React.FC<{data?: Types.PostQuery, error?: Apollo.ApolloError}>;
export const withPagePost = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.PostQuery, Types.PostQueryVariables>) => (WrappedComponent:PagePostComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.PostDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrPost = {
      getServerPage: getServerPagePost,
      withPage: withPagePost,
      usePage: usePost,
    }
export async function getServerPageSchedule
    (options: Omit<Apollo.QueryOptions<Types.ScheduleQueryVariables>, 'query'>, ctx: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ScheduleQuery>({ ...options, query: Operations.ScheduleDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useSchedule = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ScheduleQuery, Types.ScheduleQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ScheduleDocument, options);
};
export type PageScheduleComp = React.FC<{data?: Types.ScheduleQuery, error?: Apollo.ApolloError}>;
export const withPageSchedule = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ScheduleQuery, Types.ScheduleQueryVariables>) => (WrappedComponent:PageScheduleComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ScheduleDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrSchedule = {
      getServerPage: getServerPageSchedule,
      withPage: withPageSchedule,
      usePage: useSchedule,
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