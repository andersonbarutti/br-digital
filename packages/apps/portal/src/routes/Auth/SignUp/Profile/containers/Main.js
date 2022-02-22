import { compose } from 'recompose'
import { injectReducer, injectSaga } from 'redux-injectors'
import { withTranslation } from 'react-i18next'

import {
  connectState,
  dispatchOnMount,
  withResource,
} from '@project/core/src/helpers'

import ProfileComponent from '../components/Profile'
import { actions, reducer, saga, resources, MODULE_NAME } from '../modules'

const enhancer = compose(
  connectState(MODULE_NAME),
  withTranslation([MODULE_NAME]),
  withResource(MODULE_NAME, resources),
  dispatchOnMount(actions.load),
  injectReducer({ key: MODULE_NAME, reducer }),
  injectSaga({ key: MODULE_NAME, saga }),
)

export default enhancer(ProfileComponent)
