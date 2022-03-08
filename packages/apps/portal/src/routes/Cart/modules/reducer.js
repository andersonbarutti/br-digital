import { createSingleReducer } from '@project/core/src/helpers'
import { LOAD, UNLOAD } from './actions'

export const reducer = createSingleReducer({
  loadAction: LOAD,
  unloadAction: UNLOAD,
})

export default reducer
