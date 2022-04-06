import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Theme } from '@project/components'
import { SuspenseLoading } from './layouts/CoreLayout'

// import Routes from './routes'

const App = ({ store, settings }) => {
  return (
    <Theme {...settings}>
      <Provider store={store}>
          <BrowserRouter>
          <Suspense fallback={<SuspenseLoading />}>
              <></>
              {/* <Routes permissions={permissions} /> */}
            </Suspense>
          </BrowserRouter>
      </Provider>
    </Theme>
  )
}

export default App
