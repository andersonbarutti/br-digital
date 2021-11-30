export const createDataReducer = ({ requestTypes }) => ({
  [requestTypes.SUCCEEDED]: (state, action) => action.payload,
})

export default createDataReducer
