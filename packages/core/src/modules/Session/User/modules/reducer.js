import { createReducer } from '@project/core'
import { LOAD } from './actions'

const reducer = createReducer(
  {},
  {
    [LOAD.SUCCEEDED]: (state, { payload }) => {
      return { ...state, ...payload, localUpdatedAt: new Date() }
    },
  },
)

export default reducer
