import React from 'react'
import { branch } from 'recompose'

const DefaultLoadingComponent = () => <div />

export const displayWhen = (condition, LoadingComponent) =>
  branch(
    condition,
    component => component,
    () => LoadingComponent || DefaultLoadingComponent
  )

export default displayWhen
