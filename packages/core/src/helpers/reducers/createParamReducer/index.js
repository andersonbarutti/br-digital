export const createParamReducer = (param, { requestTypes }) => ({
  [requestTypes.SUCCEEDED]: (state, action) => action.payload[param],
})

export default createParamReducer
