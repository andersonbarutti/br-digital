import storage from 'local-storage-fallback'

const KEY = 'i18nPrevLocation'

export const getPrevLocation = () => JSON.parse(storage.getItem(KEY))

export const setCurrLocation = value =>
  storage.setItem(KEY, JSON.stringify(value))

export const clearLocation = () => storage.removeItem(KEY)
