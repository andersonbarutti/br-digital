export const createSucceededAction = (requestTypes, _meta) => (payload, meta = _meta) => ({
  type: requestTypes.SUCCEEDED,
  payload,
  meta,
})

export default createSucceededAction
