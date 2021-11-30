import { all, fork, takeEvery, put } from 'redux-saga/effects'
import { createApiSaga } from '@project/core/src/helpers'
import { actions as locationActions } from '@project/core/src/modules/Session/Location'
import { doLoad } from './datasource'
import { LOAD, INIT } from './actions'

const load = createApiSaga({ requestTypes: LOAD, api: doLoad })

function* initialize({ payload }) {
  const { location, locationAcronym } = payload
  const { list } = location

  const currentLocation = list.find(item => item.acronym === locationAcronym)

  if (locationAcronym && !currentLocation) {
    yield console.log('Location not found')
    yield put(locationActions.setCurrentLocation(null))
    window.location.assign('/')
  }

  yield put(locationActions.setCurrentLocation(currentLocation))
}

function* watchLoad() {
  yield takeEvery(LOAD.REQUESTED, load)
}

function* watchInit() {
  yield takeEvery(INIT, initialize)
}

export default function*() {
  yield all([fork(watchLoad), fork(watchInit)])
}
