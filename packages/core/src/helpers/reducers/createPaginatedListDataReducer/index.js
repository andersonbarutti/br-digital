export const createPaginatedDataReducer = ({ requestTypes }) => ({
  [requestTypes.REQUESTED]: (state, { payload: { reset } = {} }) => (
    reset ? [] : state
  ),
  [requestTypes.SUCCEEDED]: (state, { payload: { list, reset } = {} }) => (
    reset ? list : state.concat(list)
  ),
})

export default createPaginatedDataReducer
