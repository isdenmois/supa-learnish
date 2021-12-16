import {
  createClient,
  dedupExchange,
  fetchExchange,
  useQuery as useQueryUntyped,
  UseQueryArgs,
  UseQueryResponse,
} from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { Query } from './types'
import { lessonCacheExchange } from './lesson'

export const client = createClient({
  url: 'https://graphql.eu.fauna.com/graphql',
  fetchOptions: {
    headers: {
      authorization: `Basic ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          ...lessonCacheExchange,
        },
      },
    }),
    fetchExchange,
  ],
})

export const useQuery = <Variables = object>(
  args: UseQueryArgs<Variables, Query>,
): UseQueryResponse<Query, Variables> => useQueryUntyped(args)
