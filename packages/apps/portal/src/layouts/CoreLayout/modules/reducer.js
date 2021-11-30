import * as R from 'ramda'
import { createReducer, createSingleReducer } from '@project/core'
import { LOAD, UNLOAD, RUN, SHUTDOWN } from './actions'

const isRunning = createReducer(false, {
  [RUN]: R.T,
  [SHUTDOWN]: R.F,
})

export const reducer = createSingleReducer({
  loadAction: LOAD,
  unloadAction: UNLOAD,
  reducers: {
    isRunning,
  },
})

export default reducer
