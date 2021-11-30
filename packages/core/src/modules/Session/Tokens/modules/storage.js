import storage from 'local-storage-fallback'
import decode from 'jwt-decode'

const KEY = 'BioRitmoTokens'

export const get = () => JSON.parse(storage.getItem(KEY))

export const set = value => {
  const { accessToken } = value || {}
  if (accessToken) {
    const { id } = decode(accessToken)
    storage.setItem(KEY, JSON.stringify({ ...value, id }))
  } else {
    storage.setItem(KEY, JSON.stringify(null))
  }
}
