import React from 'react'
import ReactDOM from 'react-dom'
import initI18n from './i18n'
import { initialize } from './store'
import { SuspenseLoading } from './layouts/CoreLayout'
import App from './App'
import * as serviceWorker from './serviceWorker'

const MOUNT_NODE = document.getElementById('root')

// While loading the system settings
ReactDOM.render(<SuspenseLoading />, MOUNT_NODE)

const render = props => {
  ReactDOM.render(<App {...props} />, MOUNT_NODE)
}

const initApp = props => {
  initI18n()
  render(props)
}

initialize(initApp).then(() => {})

serviceWorker.unregister()
