import { compose } from 'recompose'
import { injectReducer, injectSaga } from 'redux-injectors'
import { withTranslation } from 'react-i18next'
import { connectState, dispatchOnMount } from '@project/core'

import CoreLayoutComponent from '../components/CoreLayout'
import { actions, reducer, saga, MODULE_NAME } from '../modules'

const enhancer = compose(
  connectState(MODULE_NAME),
  dispatchOnMount(actions.load),
  withTranslation(),
  injectReducer({ key: MODULE_NAME, reducer }),
  injectSaga({ key: MODULE_NAME, saga }),
)

export default enhancer(CoreLayoutComponent)
