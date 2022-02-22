import React from 'react'
import {
  filterBySessionPermissions,
  // SESSION,
} from '@project/core/src/modules/Session/Permissions'
import { useRoutes } from 'react-router-dom'

import { CoreLayout, MainLayout } from '@project/portal/src/layouts'

import PlansRoutes from './Plans'
import AuthRoutes from './Auth'
import { I18nRedirect, NotFound } from './Statics'

const Routes = props => {
  const { roles } = props

  const routesConfig = [
    { path: 'i18n', element: <I18nRedirect /> },
    { path: '/404', element: <NotFound /> },
    {
      element: <CoreLayout />,
      children: [
        {
          path: '/',
          element: <MainLayout />,
          children: [
            PlansRoutes(),
            AuthRoutes(),
          ],
        },
        {
          path: ':locationAcronym',
          element: <MainLayout />,
          children: [
            PlansRoutes(),
          ]
        },
      ],
    },
  ]

  const routesAllowed = filterBySessionPermissions(routesConfig, roles, {
    persmissionsKey: 'permissions',
    childrenKey: 'children',
  })

  return useRoutes(routesAllowed)
}

export default Routes
