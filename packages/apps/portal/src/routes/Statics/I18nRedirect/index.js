import React from 'react'
import { Navigate } from 'react-router-dom'
import { getRedirectPathname } from '@project/core/src/modules/I18n'

const defaultProps = {}
const propTypes = {}

export const I18nRedirect = () => {
  const pathname = getRedirectPathname()
  return <Navigate to={pathname} replace />
}

I18nRedirect.defaultProps = defaultProps
I18nRedirect.propTypes = propTypes

export default I18nRedirect
