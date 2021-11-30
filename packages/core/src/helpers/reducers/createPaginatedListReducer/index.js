import { combineReducers } from 'redux'
import * as R from 'ramda'

import createCurrentPageReducer from '@project/core/src/helpers/reducers/createCurrentPageReducer'
import createIsFetchingReducer from '@project/core/src/helpers/reducers/createIsFetchingReducer'
import createPaginatedListDataReducer from '@project/core/src/helpers/reducers/createPaginatedListDataReducer'
import createReducer from '@project/core/src/helpers/reducers/createReducer'
import createParamReducer from '@project/core/src/helpers/reducers/createParamReducer'
import createUnloadReducer from '@project/core/src/helpers/reducers/createUnloadReducer'

export const createPaginatedListReducer = ({ loadAction, unloadAction, listReducers = [], reducers = {} }) => {
  const createReducerWithUnload = (initialState, ...reducers) =>
    createReducer(initialState, R.mergeAll([createUnloadReducer({ action: unloadAction, initialState }), ...reducers]))

  const list = createReducerWithUnload(
    [],
    createPaginatedListDataReducer({ requestTypes: loadAction }),
    ...listReducers,
  )

  const isFetching = createReducerWithUnload(false, createIsFetchingReducer({ requestTypes: loadAction }))

  const currentPage = createReducerWithUnload(1, createCurrentPageReducer({ requestTypes: loadAction }))

  const total = createReducerWithUnload(0, createParamReducer('total', { requestTypes: loadAction }))

  return combineReducers({ list, isFetching, currentPage, total, ...reducers })
}

export default createPaginatedListReducer
