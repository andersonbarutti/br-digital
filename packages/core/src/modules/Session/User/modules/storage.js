import storage from 'local-storage-fallback'

const KEY = 'bioritmoUser'

export const get = () => JSON.parse(storage.getItem(KEY))

export const set = value => storage.setItem(KEY, JSON.stringify(value))

export const update = value => set({ ...get(), ...value })
