import * as R from 'ramda'
import { branch, nest } from 'recompose'

import Layout from '../components/Layout'
import SelectLocation from '../components/SelectLocation'
import Plans from '../components/Plans'

const enhance = branch(
  R.prop('branch'),
  component => nest(component, Plans),
  component => nest(component, SelectLocation),
)

export default enhance(Layout)
