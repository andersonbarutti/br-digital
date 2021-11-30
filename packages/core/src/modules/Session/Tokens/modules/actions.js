import createRequestTypes from '@project/core/src/helpers/actions/createRequestTypes'
import createAction from '@project/core/src/helpers/actions/createAction'
import createRequestedAction from '@project/core/src/helpers/actions/createRequestedAction'

export const SIGN_UP = createRequestTypes('SESSION/SIGN_UP')
export const SIGN_IN = createRequestTypes('SESSION/SIGN_IN')
export const SIGN_OUT = 'SESSION/SIGN_OUT'

export const CONFIRM_EMAIL = createRequestTypes('SESSION/CONFIRM_EMAIL')

export const VALIDATE_EMAIL = createRequestTypes('SESSION/VALIDATE_EMAIL')
export const VALIDATE_USERNAME = createRequestTypes('SESSION/VALIDATE_USERNAME')

export const UPDATE_CURRENT_USER = createRequestTypes(
  'SESSION/UPDATE_CURRENT_USER',
)

export const actions = {
  signUp: createRequestedAction(SIGN_UP),
  signIn: createRequestedAction(SIGN_IN),
  signOut: createAction(SIGN_OUT),

  confirmEmail: createRequestedAction(CONFIRM_EMAIL),

  validateUsername: createRequestedAction(VALIDATE_USERNAME),
  validateEmail: createRequestedAction(VALIDATE_EMAIL),

  updateCurrentUser: createRequestedAction(UPDATE_CURRENT_USER),
}

export default actions
