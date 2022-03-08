import {
  createRequestTypes,
  createAction,
  createActionType,
  createRequestedAction,
} from '@project/core'

import { MODULE_NAME } from './constants'

export const LOAD = createRequestTypes(`${MODULE_NAME}/LOAD`)
export const UNLOAD = createActionType(`${MODULE_NAME}ROUTE/UNLOAD`)

export const actions = {
  load: createRequestedAction(LOAD),
  unload: createAction(UNLOAD),
}

export default actions
