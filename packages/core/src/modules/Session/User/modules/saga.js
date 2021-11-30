import { all, fork, takeEvery, put } from 'redux-saga/effects'
import { LOAD, actions } from './actions'

function* loginSucceeded(action) {
  const { auth = {} } = action || {}
  const {
    uid,
    displayName,
    email,
    emailVerified,
    photoUrl,
    phoneNumber,
    isAnonymous,
    lastLoginAt,
    createdAt,
  } = auth

  const payload = {
    uid,
    displayName,
    email,
    emailVerified,
    photoUrl,
    phoneNumber,
    isAnonymous,
    lastLoginAt,
    createdAt,
  }
  
  yield put(actions.set(payload))
}

function* watchLogin() {
  yield takeEvery(LOAD.SUCCEEDED, loginSucceeded)
}

export default function*() {
  yield all([fork(watchLogin)])
}
