import { createFactory, Component } from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

const withState = (
  stateName,
  stateUpdaterName,
  initialState,
) => BaseComponent => {
  const factory = createFactory(BaseComponent)
  class WithPropOrState extends Component {
    state = {
      stateValue:
        typeof initialState === 'function'
          ? initialState(this.props)
          : initialState,
    }

    componentWillReceiveProps(nextProps) {
      const prop = nextProps[stateName]
      if (prop !== this.state.stateValue) {
        this.setState({
          stateValue:
            typeof initialState === 'function' ? initialState(nextProps) : prop,
        })
      }
    }

    updateStateValue = (updateFn, callback) =>
      this.setState(
        ({ stateValue }) => ({
          stateValue:
            typeof updateFn === 'function' ? updateFn(stateValue) : updateFn,
        }),
        callback,
      )

    render() {
      return factory({
        ...this.props,
        [stateName]: this.state.stateValue,
        [stateUpdaterName]: this.updateStateValue,
      })
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'withState'))(
      WithPropOrState,
    )
  }
  return WithPropOrState
}

export default withState
