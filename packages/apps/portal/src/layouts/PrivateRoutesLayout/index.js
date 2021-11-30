import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { isUserSignedIn } from '@project/core/src/modules/Session/User'

const PrivateRoutesLayout = () => {
  const navigate = useNavigate()

  if (!isUserSignedIn()) {
    navigate('/sign-in')
    return null
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default PrivateRoutesLayout
