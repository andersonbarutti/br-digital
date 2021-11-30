import createActionType from '@project/core/src/helpers/actions/createActionType'

const REQUESTED = 'REQUESTED'
const SUCCEEDED = 'SUCCEEDED'
const FAILED = 'FAILED'

export const ACTION_SUFFIXES_TYPES = [REQUESTED, SUCCEEDED, FAILED]

export const createRequestTypes = (str, ignoreHash) => {
  const base = ignoreHash ? str : createActionType(str)

  return ACTION_SUFFIXES_TYPES.reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export default createRequestTypes
