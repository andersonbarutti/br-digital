import * as R from 'ramda'
import { isPlainObject, isString } from 'lodash'
import { lifecycle } from 'recompose'

export const dispatchOnMount = action =>
  lifecycle({
    componentDidMount() {
      const parsedAction = (() => {
        if (isPlainObject(action)) {
          return action
        }
        if (isString(action)) {
          return R.objOf('type', action)
        }
        return action(this.props)
      })()
      this.props.dispatch(parsedAction)
    },
  })

export default dispatchOnMount
