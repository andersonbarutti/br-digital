import { combineReducers } from 'redux'
import * as R from 'ramda'

import createIsFetchingReducer from '@project/core/src/helpers/reducers/createIsFetchingReducer'
import createPaginatedListDataReducer from '@project/core/src/helpers/reducers/createPaginatedListDataReducer'
import createReducer from '@project/core/src/helpers/reducers/createReducer'
import createUnloadReducer from '@project/core/src/helpers/reducers/createUnloadReducer'

export const createListReducer = ({ loadAction, unloadAction, listReducers = [], reducers = {} }) => {
  const createReducerWithUnload = (initialState, ...reducers) =>
    createReducer(initialState, R.mergeAll([createUnloadReducer({ action: unloadAction, initialState }), ...reducers]))

  const list = createReducerWithUnload(
    [],
    createPaginatedListDataReducer({ requestTypes: loadAction }),
    ...listReducers,
  )

  const isFetching = createReducerWithUnload(false, createIsFetchingReducer({ requestTypes: loadAction }))

  return combineReducers({ list, isFetching, ...reducers })
}

export default createListReducer
