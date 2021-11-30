import decode from 'jwt-decode'
import {
  post,
  put,
  head,
  sendJson,
  verificationToken,
} from '@project/core/src/helpers/api'
import { get as getUser } from '@project/core/src/modules/Session/User/modules/storage'
import { set as setTokens } from './storage'
import {
  // SIGN_IN_FAILED,
  EMAIL_ALREADY_EXISTS,
  USERNAME_ALREADY_EXISTS,
  SOMETHING_WRONG_HAPPENED,
} from './constraints'

export const getConfirmationUrl = next => {
  const { protocol, hostname, port } = window.location
  const rootHostName = hostname.replace('admin.', '')

  const query = next ? `?next=${next}` : ''

  return `${protocol}//${rootHostName}${
    port ? `:${port}` : ''
  }/activate${query}`
}

const createTokens = async ({ username, password }) => {
  const body = sendJson({ username, password })
  const { data } = await post('/tokens/', body)
  const { token: accessToken } = data

  const { id: userId } = decode(accessToken)

  setTokens({ accessToken })

  return {
    tokens: { accessToken },
    userId,
  }
}

export const doSignIn = async ({ username, password }) => {
  try {
    const { tokens: data } = await createTokens({
      username,
      password,
    })

    return {
      data,
    }
  } catch (e) {
    // throw new SubmissionError({ username: SIGN_IN_FAILED })
  }
}

export const doSignUp = async ({ payload }) => {
  const { name, document, email, password } = payload

  const body = {
    nome: name,
    email,
    documento: document || email,
    username: email || document,
    password,
  }

  try {
    const { data } = await post('/user/', sendJson(body))

    await createTokens({ username: email, password })

    return { data }
  } catch (err) {
    // throw new SubmissionError({ username: SOMETHING_WRONG_HAPPENED })
  }
}

export const doConfirmEmail = ({ token }) =>
  put('/verifications', verificationToken(token))

export const doValidateEmail = email =>
  head(`/user/email/${email}`).then(
    () => {
      const errors = { email: EMAIL_ALREADY_EXISTS }
      throw errors
    },
    error => {
      if (error.status >= 500) {
        const errors = { email: SOMETHING_WRONG_HAPPENED }
        throw errors
      }
      return true
    },
  )

export const doValidateUsername = username =>
  head(`/user/username/${username}`).then(
    () => {
      const errors = { username: USERNAME_ALREADY_EXISTS }
      throw errors
    },
    error => {
      if (error.status >= 500) {
        const errors = { username: SOMETHING_WRONG_HAPPENED }
        throw errors
      }
      return true
    },
  )

export const doUpdateCurrentUser = async fields => {
  const { username = null } = fields

  const user = getUser()

  if (username) {
    user.username = username
  }

  const response = put(`/user/${user.id}`, sendJson(user))

  return response
}
