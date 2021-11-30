import { combineReducers } from 'redux'
import { reducer as user } from '@project/core/src/modules/Session/User'
import { reducer as isAuthenticated } from '@project/core/src/modules/Session/Tokens'
import { reducer as settings } from '@project/core/src/modules/Session/Settings'
import { reducer as geolocation } from '@project/core/src/modules/Session/Geolocation'
import { reducer as location } from '@project/core/src/modules/Session/Location'

const session = {
  user,
  settings,
  geolocation,
  location,
  isAuthenticated,
}

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    // other non-injected reducers can go here...
    ...session,
  })

  return rootReducer
}
