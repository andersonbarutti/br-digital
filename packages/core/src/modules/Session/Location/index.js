import { doLoad, reducer, saga, storage, actions } from './modules'

const get = async (initial = null) => {
  const { list = [] } = await doLoad()

  const currentLocation = list.find(({ acronym }) => acronym === initial) || null

  storage.setCurrentLocation(currentLocation)

  return {
    list,
    currentLocation,
  }
}

export {
  actions,
  storage,
  reducer,
  saga,
  get,
}
