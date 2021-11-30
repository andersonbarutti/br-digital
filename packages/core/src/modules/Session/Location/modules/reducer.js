import { createReducer, createListReducer } from '@project/core'
import { LOAD, UNLOAD, SET_CURRENT_LOCATION } from './actions'

const currentLocation = createReducer({}, {
  [SET_CURRENT_LOCATION]: (state, { payload }) => payload,
})

const reducer = createListReducer({
  loadAction: LOAD,
  unloadAction: UNLOAD,
  reducers: {
    currentLocation,
  }
})

export default reducer