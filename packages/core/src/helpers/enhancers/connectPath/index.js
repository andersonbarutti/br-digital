import * as R from 'ramda'
import { connect } from 'react-redux'

export const pathToProps = R.compose(
  R.converge(R.objOf, [R.last, R.path]),
  R.ifElse(R.compose(R.equals('String'), R.type), R.split('.'), R.identity),
)

export const connectPath = R.compose(connect, pathToProps)

export default connectPath
