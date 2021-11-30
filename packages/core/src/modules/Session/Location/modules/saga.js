import { all, fork, takeEvery } from 'redux-saga/effects'
import { createApiSaga } from '@project/core'
import { doLoad } from './datasource'
import * as storage from './storage'
import { LOAD, SET_CURRENT_LOCATION } from './actions'

const load = createApiSaga({ requestTypes: LOAD, api: doLoad })

function* setCurrentLocation({ payload }) {
  yield storage.setCurrentLocation(payload)
}

function* watchSetCurrentLocation() {
  yield takeEvery(SET_CURRENT_LOCATION, setCurrentLocation)
}

function* watchLoad() {
  yield takeEvery(LOAD, load)
}

export function* sagas() {
  yield all([fork(watchLoad), fork(watchSetCurrentLocation)])
}

export default sagas