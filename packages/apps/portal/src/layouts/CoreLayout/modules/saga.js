import {
  all,
  fork,
  takeEvery,
  takeLatest,
  put,
} from 'redux-saga/effects'
import { createApiSaga } from '@project/core'
import { doLoad } from './datasource'
import { LOAD, SHUTDOWN, REFRESH, actions } from './actions'

const load = createApiSaga({ requestTypes: LOAD, api: doLoad })

function* watch() {
  yield takeEvery(LOAD.REQUESTED, load)
}

function* run() {
  yield put(actions.run())
}

function* cleanUp() {
  yield console.log('SYSTEM (shutdown): Cleaning up state...')
  yield put(actions.refresh())
}

function* watchInit() {
  yield takeEvery(LOAD.SUCCEEDED, run)
  yield takeEvery(SHUTDOWN, cleanUp)
  yield takeLatest(REFRESH, run)
}

export default function*() {
  yield all([fork(watch), fork(watchInit)])
}
