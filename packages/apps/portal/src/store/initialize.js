import {
  init as initUser,
   getUser,
} from '@project/core/src/modules/Session/User'
import { get as getPermissions } from '@project/core/src/modules/Session/Permissions'
import { get as getSettings } from '@project/core/src/modules/Session/Settings'
import { get as getGeolocation } from '@project/core/src/modules/Session/Geolocation'
import { get as getLocation } from '@project/core/src/modules/Session/Location'
import configureStore from './configureStore'

const getInitialState = async () => {
  const version = '1.0.0'
  console.log(
    `%BioRitmo version ${version} powered by BioRitmo`,
    'color: #00AF50; font-family:sans-serif; font-size: 20px',
  )
  await Promise.all([initUser()])
  
  const user = getUser()
  const permissions = await getPermissions(user)
  const settings = await getSettings()
  const geolocation = await getGeolocation()
  const location = await getLocation()
  const isAuthenticated = !!user

  return {
    user,
    permissions,
    settings,
    geolocation,
    location,
    isAuthenticated,
  }
}

const initialize = async next => {
  const initialState = await getInitialState()
  const store = configureStore(initialState)

  next({ ...initialState, store })
}

export default initialize
