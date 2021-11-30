import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'
import * as S from './CoreLayout.styles'

const defaultProps = {}
const propTypes = {}

export const CoreLayout = ({ t }) => {
  return (
    <S.Container>
      <Helmet
        titleTemplate={`%s - ${t('general:title')} - ${t('general:subtitle')}`}
      >
        <title>{t('general:title') - t('general:subtitle')}</title>
      </Helmet>
      <Outlet />
    </S.Container>
  )
}

CoreLayout.defaultProps = defaultProps
CoreLayout.propTypes = propTypes

export default CoreLayout
