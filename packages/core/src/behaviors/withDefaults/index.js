import { compose } from 'recompose'
import withAs, { withAsPropTypes } from '../withAs'
import withLink, { withLinkPropTypes } from '../withLink'

export const withDefaultsPropTypes = {
  ...withAsPropTypes,
  ...withLinkPropTypes,
}

export const withDefaults = compose(
  withAs,
  withLink,
)

export default withDefaults
