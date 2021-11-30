import { createListReducer } from '@project/core'
import { LOAD, UNLOAD } from './actions'

export const reducer = createListReducer({
  loadAction: LOAD,
  unloadAction: UNLOAD,
})

export default reducer