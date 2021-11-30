import { actions } from './actions'

const ActivateRoute = store => ({
  path: 'activate',
  onEnter: ({ location }) => {
    const { next, account_activation_token: token } = location.query

    const done = () => {
      const nextRoute = next || '/'

      window.location = nextRoute
    }

    if (!token) {
      return done()
    }

    return store.dispatch(actions.confirmEmail({ token })).then(done, done)
  },
})

const createRoutes = store => ({
  childRoutes: [
    ActivateRoute(store),
  ],
})

export default createRoutes
