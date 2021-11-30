import * as R from 'ramda'
import { compose } from 'recompose'
import { displayWhen } from '../displayWhen'

const displayOnEmpty = (EmptyComponent, Component) =>
  compose(displayWhen(props => !R.isEmpty(props.list), EmptyComponent))(Component)

export default displayOnEmpty
