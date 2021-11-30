import { createActionType, createRequestTypes, createRequestedAction, createAction } from '@project/core'
import { MODULE_NAME } from './constants'

export const LOAD = createRequestTypes(`${MODULE_NAME}/LOAD`)
export const UNLOAD = createActionType(`${MODULE_NAME}/UNLOAD`)
export const SET_CURRENT_LOCATION = createActionType(`${MODULE_NAME}/SET_CURRENT_LOCATION`)
export const CLEAN_UP = createActionType(`${MODULE_NAME}/CLEAN_UP`)

export const actions = {
  load: createRequestedAction(LOAD),
  unload: createAction(UNLOAD),
  setCurrentLocation: createAction(SET_CURRENT_LOCATION),
  cleanUp: createAction(CLEAN_UP),
}

export default actions