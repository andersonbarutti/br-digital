import reducer from './modules/reducer'
import saga from './modules/saga'
import { set, get } from './modules/storage'

export const isUserSignedIn = () => !!get()

export const getUser = () => get()

export const init = async () => {
  // const tokens = await getTokens()
  const tokens = true

  if (!tokens) {
    set(null)
    return
  }

  try {
    const user = { id: 1, name: 'Patrick' }
    set(user)
  } catch (error) {
    set(null)
  }
}

export { reducer, saga }
