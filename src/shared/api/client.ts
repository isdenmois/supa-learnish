import { createClient } from 'urql'

export const client = createClient({
  url: 'https://graphql.eu.fauna.com/graphql',
  fetchOptions: {
    headers: {
      authorization: `Basic ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
  },
})
