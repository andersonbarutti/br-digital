export const createUnloadReducer = ({ action, initialState }) => ({
  [action]: () => initialState,
})

export default createUnloadReducer
