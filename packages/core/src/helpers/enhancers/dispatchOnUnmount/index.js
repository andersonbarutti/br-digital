import { isPlainObject } from 'lodash'
import { lifecycle } from 'recompose'

export const dispatchOnUnmount = action =>
  lifecycle({
    componentWillUnmount() {
      this.props.dispatch(
         isPlainObject(action) ?
          action :
          action(this.props)
       )
    },
  })

export default dispatchOnUnmount
