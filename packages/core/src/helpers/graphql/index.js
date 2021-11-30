import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

import { setContext } from '@apollo/client/link/context'

const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:4000'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  }
})

export const httpLink = () =>
  createHttpLink({
    uri: GRAPHQL_URL,
  })

export function client(opts) {
  return new ApolloClient({
    link: authLink.concat(httpLink()),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        errorPolicy: 'ignore',
      },
      mutate: {
        errorPolicy: 'ignore',
      },
    },
    ...opts,
  })
}

export const defaultClient = client()

const randomInteger = (
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
) => Math.floor(Math.random() * (max - min + 1)) + min
const later = (delay, value) =>
  new Promise(resolve => setTimeout(resolve, delay, value))

async function asyncRetry(task, opts = {}) {
  const {
    maxAttempts = 5,
    retryIf = () => true,
    delay = 0,
    jitter = false,
  } = opts

  let tryCount = 0

  // TODO: Use recursive solution
  // eslint-disable-next-line
  while (true) {
    try {
      tryCount++
      if (tryCount > 1 && delay)
        await later(jitter ? randomInteger(0, delay) : delay)
      return await task()
    } catch (e) {
      if (tryCount >= maxAttempts || !retryIf(e)) {
        if (Error.captureStackTrace) {
          Error.captureStackTrace(e, asyncRetry)
        }
        throw e
      }
    }
  }
}

function statusNotIn(statusCodes = []) {
  return e => !statusCodes.includes(e.statusCode)
}

function normalizeApolloError({ networkError, ...rest }) {
  const statusCode =
    networkError?.statusCode ||
    networkError?.response?.status ||
    (networkError ? 0 : -1)
  const graphQLErrors = networkError?.result?.errors
  const err = new Error(
    `GraphQL error: ${networkError?.message || 'Unexpected error'}`,
  )
  err.statusCode = statusCode
  err.graphQLErrors = graphQLErrors
  err.meta = rest
  throw err
}

async function withNormalizedError(promise) {
  try {
    return await Promise.resolve(promise)
  } catch (err) {
    throw normalizeApolloError(err)
  }
}

const defaultRetryOpts = {
  retryIf: statusNotIn([-1, 0, 400]),
}

export async function query({
  gql,
  headers,
  retryOpts = defaultRetryOpts,
  client = defaultClient,
  ...opts
}) {
  return await asyncRetry(
    () =>
      withNormalizedError(
        runQuery(withHeaders({ query: gql, client, headers, ...opts })),
      ),
    retryOpts,
  )
}

export async function mutate({
  gql,
  headers,
  retryOpts = defaultRetryOpts,
  client = defaultClient,
  ...opts
}) {
  return await asyncRetry(
    () =>
      withNormalizedError(
        runMutate(withHeaders({ mutation: gql, client, headers, ...opts })),
      ),
    retryOpts,
  )
}

export function withHeaders({ headers, ...opts }) {
  return { context: { headers }, ...opts }
}

export async function runQuery({ gql, client = defaultClient, ...opts }) {
  return await client.query({ query: gql, ...opts })
}

export async function runMutate({ gql, client = defaultClient, ...opts }) {
  return await client.mutate({ mutation: gql, ...opts })
}

export const graphql = {
  query,
  mutate,
}