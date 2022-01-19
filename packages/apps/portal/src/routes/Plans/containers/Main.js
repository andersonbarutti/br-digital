// import * as R from 'ramda'
import { compose, withProps } from 'recompose'
import { injectReducer, injectSaga } from 'redux-injectors'
import { useLocation } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import { connectState, injectActions, dispatchOnMount, dispatchOnUnmount } from '@project/core'

import { actions, reducer, saga, MODULE_NAME } from '../modules'

import Render from '../containers/Render'

const enhancer = compose(
  connectState(MODULE_NAME),
  withTranslation(),
  withProps(useLocation),
  injectActions(actions),
  dispatchOnMount(actions.load),
  dispatchOnUnmount(actions.unload),
  injectReducer({ key: MODULE_NAME, reducer }),
  injectSaga({ key: MODULE_NAME, saga }),
  // displayWhen(({ list }) => !R.isEmpty(list), Ghost),
)

export default enhancer(Render)