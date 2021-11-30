import { all, takeEvery, fork } from 'redux-saga/effects'
import createApiSaga from '@project/core/src/helpers/sagas/createApiSaga'
import { clear as clearTokens } from '@project/core/src/modules/Session/Tokens'
import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  CONFIRM_EMAIL,
  VALIDATE_EMAIL,
  VALIDATE_USERNAME,
  UPDATE_CURRENT_USER,
} from './actions'
import { redirectOnSignIn } from './helpers'

import {
  doSignUp,
  doSignIn,
  doConfirmEmail,
  doValidateEmail,
  doValidateUsername,
  doUpdateCurrentUser,
} from './datasource'

const signUp = createApiSaga({
  requestTypes: SIGN_UP,
  api: doSignUp,
})

const signIn = createApiSaga({
  requestTypes: SIGN_IN,
  api: doSignIn,
})

const confirmEmail = createApiSaga({
  requestTypes: CONFIRM_EMAIL,
  api: doConfirmEmail,
})

const validateEmail = createApiSaga({
  requestTypes: VALIDATE_EMAIL,
  api: doValidateEmail,
})

const validateUsername = createApiSaga({
  requestTypes: VALIDATE_USERNAME,
  api: doValidateUsername,
})

const updateCurrentUser = createApiSaga({
  requestTypes: UPDATE_CURRENT_USER,
  api: doUpdateCurrentUser,
})

function* afterSignIn() {
  yield redirectOnSignIn()
}

function signOut() {
  clearTokens()
}

function* afterUpdateCurrentUser() {
  yield window.location.reload(true)
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP.REQUESTED, function*(action) {
    const sanitizedAction = {
      ...action,
      payload: {
        ...action.payload,
      },
    }

    yield signUp(sanitizedAction)
  })
}

function* watchSignIn() {
  yield takeEvery(SIGN_IN.REQUESTED, function*(action) {
    yield signIn({
      ...action,
      payload: {
        ...action.payload,
      },
    })
  })

  yield takeEvery(SIGN_IN.SUCCEEDED, afterSignIn)
}

function* watchSignOut() {
  yield takeEvery(SIGN_OUT, signOut)
}

function* watchConfirmEmail() {
  yield takeEvery(CONFIRM_EMAIL.REQUESTED, confirmEmail)
}

function* watchValidateEmail() {
  yield takeEvery(VALIDATE_EMAIL.REQUESTED, validateEmail)
}

function* watchValidateUsername() {
  yield takeEvery(VALIDATE_USERNAME.REQUESTED, validateUsername)
}

function* watchUpdateCurrentUser() {
  yield takeEvery(UPDATE_CURRENT_USER.REQUESTED, updateCurrentUser)
  yield takeEvery(UPDATE_CURRENT_USER.SUCCEEDED, afterUpdateCurrentUser)
}

export default function* tokens() {
  yield all([
    fork(watchSignUp),
    fork(watchSignIn),
    fork(watchSignOut),
    fork(watchConfirmEmail),
    fork(watchValidateEmail),
    fork(watchValidateUsername),
    fork(watchUpdateCurrentUser),
  ])
}
