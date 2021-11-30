import { compose, withProps } from 'recompose'
import { injectReducer, injectSaga } from 'redux-injectors'
import { useParams } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import {
  connectPath,
  connectState,
  withResource,
  injectActions
} from '@project/core'

import MainLayoutComponent from '../components/MainLayout'
import { actions, reducer, saga, resources, MODULE_NAME } from '../modules'

const enhancer = compose(
  withProps(useParams),
  connectState(MODULE_NAME),
  connectPath('location'),
  withTranslation([MODULE_NAME]),
  withResource(MODULE_NAME, resources),
  injectActions(actions),
  injectReducer({ key: MODULE_NAME, reducer }),
  injectSaga({ key: MODULE_NAME, saga }),
)

export default enhancer(MainLayoutComponent)
