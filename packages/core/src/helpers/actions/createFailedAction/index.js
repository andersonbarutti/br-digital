export const createFailedAction = (requestTypes, _meta) => (payload, meta = _meta) => ({
  type: requestTypes.FAILED,
  error: true,
  payload,
  meta,
})

export default createFailedAction
