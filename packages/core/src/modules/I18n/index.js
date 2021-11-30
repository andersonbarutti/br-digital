import {
  getPrevLocation,
  setCurrLocation,
  clearLocation,
} from './modules/storage'

export const getRedirectPathname = () => {
  const { pathname = '/' } = getPrevLocation() || {}
  clearLocation()

  return pathname
}

export { getPrevLocation, setCurrLocation, clearLocation }
