export const createCurrentPageReducer = ({ requestTypes }) => ({
  [requestTypes.SUCCEEDED]: (state, { payload: { reset } }) => (
    reset && state > 0 ? 2 : state + 1
  ),
  LOCATION_CHANGE: () => 1,
})

export default createCurrentPageReducer
