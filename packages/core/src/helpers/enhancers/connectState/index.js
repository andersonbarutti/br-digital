import { connect } from 'react-redux'

export const connectState = key =>
  connect(state => ({ ...state[key] }))

export default connectState
