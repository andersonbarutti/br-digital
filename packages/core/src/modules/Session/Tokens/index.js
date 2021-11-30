import decode from 'jwt-decode'
import { api, sendJsonRefreshToken } from '@project/core/src/helpers/api'
import createReducer from '@project/core/src/helpers/reducers/createReducer'

import injectActions from './modules/injectActions'
import * as actions from './modules/actions'
import saga from './modules/saga'
import { signInConstraints, signUpConstraints } from './modules/constraints'
import { get, set } from './modules/storage'

export const dateFromEpoch = epoch => {
  if (!epoch) return null

  const date = new Date(0)
  date.setUTCSeconds(epoch)
  return date
}

export const isExpired = () => {
  try {
    const { accessToken } = get()
    const decodedToken = decode(accessToken)
    const expiration = dateFromEpoch(decodedToken.exp)
    return (
      (!!expiration && expiration.valueOf() < new Date().valueOf()) || false
    )
  } catch (e) {
    return true
  }
}

export const clear = () => {
  set(null)
  window.location = '/'
}

export const refresh = async () => {
  const tokens = get()

  if (!tokens) {
    return
  }

  try {
    const { refreshToken } = tokens
    const { data: newTokens } = await api.post(
      '/tokens',
      sendJsonRefreshToken({ refreshToken }),
    )
    set(newTokens)
  } catch (err) {
    clear()
  }
}

export const reducer = createReducer({}, false)

export * from './modules/helpers'

export {
  actions,
  saga,
  injectActions,
  signInConstraints,
  signUpConstraints,
  get,
  set,
}
