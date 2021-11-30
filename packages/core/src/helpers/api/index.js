import 'whatwg-fetch'
import * as R from 'ramda'
import { stringify } from 'query-string'
import { get as getTokens } from '@project/core/src/modules/Session/Tokens/modules/storage'
import merge from 'lodash/merge'
import parseResponse from './parseResponse'

const apiUrl = process.env.REACT_APP_API_URL || 'http://api.localhost:3001'
const legacyApiUrl =
  process.env.REACT_APP_LEGACY_API_URL || 'http://legacy-api.localhost:3001'

export const withRetry = async (fn, onError, times = 5) => {
  try {
    await fn()
  } catch (err) {
    times > 0 ? await withRetry(fn, onError, times - 1) : onError(err)
  }
}

export const method = verb => ({ method: verb })

export const header = object => ({ headers: object })

export const acceptType = type => header({ Accept: type })
export const acceptJson = () => acceptType('application/json')

export const send = (body, type) => ({
  ...(type && header({ 'Content-Type': type })),
  body,
})

export const sendJson = body => send(JSON.stringify(body), 'application/json')
export const sendJsonPassword = body =>
  send(JSON.stringify(body), 'application/json+password')
export const sendJsonRefreshToken = body =>
  send(JSON.stringify(body), 'application/json+refresh_token')

export const verificationToken = token =>
  header({ 'X-Verification-Token': token })
export const resetPasswordToken = token =>
  header({ 'X-Reset-Password-Token': token })

const authorization = value => (value ? header({ Authorization: value }) : {})

const bearerToken = token => (token ? authorization(`JWT ${token}`) : {})

export const url = (endpoint, params) => {
  const fullEndpoint =
    endpoint.indexOf('http') === 0 ? endpoint : apiUrl + endpoint
  const querystring = params ? `?${stringify(params)}` : ''
  return fullEndpoint + querystring
}

export const legacyUrl = (endpoint, params) =>
  url(legacyApiUrl + endpoint, params)

const checkStatus = response =>
  new Promise((resolve, reject) => {
    if (response.ok) {
      return resolve(response)
    }
    return reject(response)
  })

export const request = (endpoint, ...settings) => {
  const allSettings = merge(acceptJson(), ...settings)

  return fetch(url(endpoint), allSettings)
    .then(checkStatus)
    .then(allSettings.parseResponse || parseResponse)
}

export const mock = ({ body, ...init }) =>
  checkStatus(new Response(body, init)).then(parseResponse)

const addToken = (args = []) => {
  const shouldNotAdd = R.find(R.propEq('sendToken', false))(args)
  const tokens = getTokens()

  return tokens && !shouldNotAdd ? bearerToken(tokens.accessToken) : false
}

export const get = (...args) => request(...args, method('get'), addToken(args))
export const head = (...args) =>
  request(...args, method('head'), addToken(args))
export const post = (...args) =>
  request(...args, method('post'), addToken(args))
export const put = (...args) => request(...args, method('put'), addToken(args))
export const patch = (...args) =>
  request(...args, method('PATCH'), addToken(args))
export const del = (...args) =>
  request(...args, method('delete'), addToken(args))

export const api = {
  get,
  head,
  post,
  put,
  patch,
  del,
}
