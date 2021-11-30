export const createRequestedAction = (requestTypes, _meta) => (payload, meta = _meta) => ({
  type: requestTypes.REQUESTED,
  payload,
  meta: {
    thunk: true,
    ...meta,
  },
})

export default createRequestedAction
