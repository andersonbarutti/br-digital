import * as R from 'ramda'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { actions } from './actions'

const handler = action => ({ dispatch }) => values => dispatch(action(values))

export default compose(
  connect(() => ({})),
  withHandlers(R.mapObjIndexed(handler, actions)),
)
