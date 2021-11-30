import React from 'react'
import { branch, renderComponent } from 'recompose'

const Loader = () => <div>Loading</div>

export const withLoading = Component =>
  branch(props => !!props.isFetching, renderComponent(Loader), renderComponent(Component))()

export default withLoading
