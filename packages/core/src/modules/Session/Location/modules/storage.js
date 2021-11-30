import storage from 'local-storage-fallback'

const KEY = 'bioritmoLocation'

export const getCurrentLocation = () => JSON.parse(storage.getItem(KEY))

export const setCurrentLocation = value => storage.setItem(KEY, JSON.stringify(value))

export const updateCurrentLocation = value => setCurrentLocation({ ...getCurrentLocation(), ...value })
