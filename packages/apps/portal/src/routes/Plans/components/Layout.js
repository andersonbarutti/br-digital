import React from 'react'
// import T from 'prop-types'
import { Helmet } from 'react-helmet'
import * as S from './Layout.styles'

const defaultProps = {}
const propTypes = {}

export const Layout = props => {
  const { children } = props

  return (
    <S.Container>
      <Helmet>
        <title>Planos</title>
        <meta name='Name' content='Content' />
      </Helmet>
      {children &&
        React.cloneElement(children, {
          ...props,
        })}
    </S.Container>
  )
}

Layout.defaultProps = defaultProps
Layout.propTypes = propTypes

export default Layout
