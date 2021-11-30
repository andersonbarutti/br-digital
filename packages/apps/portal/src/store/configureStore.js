import { createInjectorsEnhancer } from 'redux-injectors'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { middleware as thunkMiddleware } from 'redux-saga-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createReducer from './reducers'
import sagas from './sagas'

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware({})
  const runSaga = sagaMiddleware.run
  const middlewares = [sagaMiddleware]

  const enhancers = []

  const store = createStore(
    createReducer(),
    initialState,
    composeWithDevTools(
      createInjectorsEnhancer({
        createReducer,
        runSaga,
      }),
      applyMiddleware(...middlewares),
      ...enhancers,
    ),
  )

  ;[sagas].forEach(saga => {
    if (saga) {
      sagaMiddleware.run(saga)
    }
  })

  return store
}
