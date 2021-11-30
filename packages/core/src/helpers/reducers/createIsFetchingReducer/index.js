import * as R from 'ramda'

export const createIsFetchingReducer = ({ requestTypes }) => ({
  [requestTypes.REQUESTED]: R.T,
  [requestTypes.SUCCEEDED]: R.F,
  [requestTypes.FAILED]: R.F,
})

export default createIsFetchingReducer
