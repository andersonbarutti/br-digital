import { all, fork } from 'redux-saga/effects'
import { saga as user } from '@project/core/src/modules/Session/User'
import { saga as tokens } from '@project/core/src/modules/Session/Tokens'
import { saga as location } from '@project/core/src/modules/Session/Location'

export function* sagas() {
  yield all([fork(user), fork(tokens), fork(location)])
}

export default sagas
