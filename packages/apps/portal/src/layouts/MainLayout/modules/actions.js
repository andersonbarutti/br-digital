import {
  createRequestTypes,
  createAction,
  createActionType,
  createRequestedAction,
} from '@project/core'

import { MODULE_NAME } from './constants'

export const INIT = createActionType(`${MODULE_NAME}/INIT`)
export const LOAD = createRequestTypes(`${MODULE_NAME}/LOAD`)
export const UNLOAD = createActionType(`${MODULE_NAME}ROUTE/UNLOAD`)

export const actions = {
  init: createAction(INIT),
  load: createRequestedAction(LOAD),
  unload: createAction(UNLOAD),
}

export default actions
