import { all, fork, takeEvery } from 'redux-saga/effects'
import { createApiSaga } from '@project/core'
import { doLoad } from './datasource'
import { LOAD } from './actions'

const load = createApiSaga({ requestTypes: LOAD, api: doLoad })

function* watchLoad() {
  yield takeEvery(LOAD.REQUESTED, load)
}

export default function*() {
  yield all([fork(watchLoad)])
}