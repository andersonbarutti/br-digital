export const createAction = (type, _meta) => (payload, meta = _meta) => ({
  type,
  payload,
  meta,
})

export default createAction
