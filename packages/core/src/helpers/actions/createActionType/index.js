import randomHash from '@project/core/src/_lib/randomHash'

export const createActionType = base => `${base}${randomHash().toUpperCase()}`

export default createActionType
