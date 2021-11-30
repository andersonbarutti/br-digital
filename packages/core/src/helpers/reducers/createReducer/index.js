export const createReducer = (initialState, handlers) => {
  const reducer = (state = initialState, action) => {
    const handler = handlers[action.type]

    if (typeof handler === 'function') {
      return handler(state, action)
    } else if (typeof handler !== 'undefined') {
      return handler
    }
    return state
  }

  return reducer
}

export default createReducer
