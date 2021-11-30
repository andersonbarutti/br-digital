import * as R from 'ramda'
import { withHandlers } from 'recompose'

const defaultHandler = action => ({ dispatch, ...props }) => custom =>
  dispatch(action({ ...props, ...custom }))

export const injectActions = (actions, handler = defaultHandler) =>
  withHandlers(R.mapObjIndexed(handler, actions))

export default injectActions
