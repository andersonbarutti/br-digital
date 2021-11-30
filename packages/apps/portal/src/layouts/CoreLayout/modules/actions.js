import {
  createRequestTypes,
  createAction,
  createActionType,
  createRequestedAction,
} from '@project/core'

import { MODULE_NAME } from './constants'

export const LOAD = createRequestTypes(`${MODULE_NAME}/LOAD`)
export const UNLOAD = createActionType(`${MODULE_NAME}/UNLOAD`)
export const RUN = createActionType(`${MODULE_NAME}/RUN`)
export const SHUTDOWN = createActionType(`${MODULE_NAME}/SHUTDOWN`)
export const REFRESH = createActionType(`${MODULE_NAME}/REFRESH`)

export const actions = {
  load: createRequestedAction(LOAD),
  unload: createAction(UNLOAD),
  run: createAction(RUN),
  shutdown: createAction(SHUTDOWN),
  refresh: createAction(REFRESH),
}

export default actions
