import * as R from 'ramda'
import { call, put } from 'redux-saga/effects'
import createSucceededAction from '@project/core/src/helpers/actions/createSucceededAction'
import createFailedAction from '@project/core/src/helpers/actions/createFailedAction'

const isTokenExpired = R.F

export const createApiSaga = ({ requestTypes, api }) => {
  return function*({ payload, meta }) {
    try {
      if (isTokenExpired()) {
        yield console.log('Refresh tokens')
      }
      const response = yield call(api, payload)
      yield put(createSucceededAction(requestTypes)(response, meta))
    } catch (e) {
      const error = e || {}

      yield put(createFailedAction(requestTypes)(error, meta))

      if ([401, 403].includes(error.status)) {
        console.log('Clear tokens')
      }
    }
  }
}

export default createApiSaga
