import T from 'prop-types'
import * as R from 'ramda'
import { compose, withProps, setPropTypes, mapProps } from 'recompose'

export const withAsPropTypes = {
  as: T.oneOfType([T.string, T.func]),
}

export const withAs = compose(
  withProps(props => ({
    Component: props.as || 'div',
  })),
  setPropTypes({
    as: T.oneOfType([T.string, T.func]),
  }),
  mapProps(R.omit(['as'])),
)

export default withAs
