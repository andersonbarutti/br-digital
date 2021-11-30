import { combineReducers } from 'redux'
import * as R from 'ramda'

import createIsFetchingReducer from '@project/core/src/helpers/reducers/createIsFetchingReducer'
import createParamReducer from '@project/core/src/helpers/reducers/createParamReducer'
import createReducer from '@project/core/src/helpers/reducers/createReducer'
import createUnloadReducer from '@project/core/src/helpers/reducers/createUnloadReducer'

export const createSingleReducer = ({ loadAction, unloadAction, dataReducers = [], reducers = {} }) => {
  const createReducerWithUnload = (initialState, ...reducers) =>
    createReducer(initialState, R.mergeAll([createUnloadReducer({ action: unloadAction, initialState }), ...reducers]))

  const data = createReducerWithUnload({}, createParamReducer('data', { requestTypes: loadAction }), ...dataReducers)

  const isFetching = createReducerWithUnload(false, createIsFetchingReducer({ requestTypes: loadAction }))

  return combineReducers({ data, isFetching, ...reducers })
}

export default createSingleReducer
