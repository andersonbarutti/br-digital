import { createRequestTypes, createSucceededAction } from '@project/core'
import { createRequestedAction } from '../../../../helpers'
import { MODULE_NAME } from './constants'

export const LOAD = createRequestTypes(`${MODULE_NAME}/LOAD`)

export const actions = {
  load: createRequestedAction(LOAD),
  set: createSucceededAction(LOAD),
}

export default actions
