import React from 'react'
import { Loader, Circular } from './Loading.styles'

const defaultProps = {}
const propTypes = {}

const Spinner = () => (
  <Circular viewBox='0 0 50 50'>
    <circle
      className='path'
      cx='25'
      cy='25'
      r='20'
      fill='none'
      strokeWidth='4'
    />
  </Circular>
)

const LoadingComponent = props => (
  <Loader {...props}>
    <Spinner />
  </Loader>
)

LoadingComponent.defaultProps = defaultProps
LoadingComponent.propTypes = propTypes

export default LoadingComponent
