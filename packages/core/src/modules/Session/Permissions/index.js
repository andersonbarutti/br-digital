import * as R from 'ramda'
import { createReducer } from '@project/core'

const DEFAULT_CONFIG = {
  permissionsKey: 'permissions',
  childrenKey: 'children',
}

export const filterBySessionPermissions = (
  items,
  allowedPermissions = [],
  customConfig = {},
) => {
  const { permissionsKey, childrenKey } = { ...DEFAULT_CONFIG, ...customConfig }

  const filterItems = arr => {
    return arr.reduce((acc, values) => {
      const children = values[childrenKey] || []
      const permissions = values[permissionsKey] || []

      const hasPermission = x => R.includes(x)(permissions)
      const shouldAdd =
        R.isEmpty(permissions) || R.any(hasPermission, allowedPermissions)
      const hasChild = children && !R.isEmpty(children)
      return shouldAdd
        ? [
            ...acc,
            {
              ...values,
              [childrenKey]: hasChild ? filterItems(children) : [],
            },
          ]
        : acc
    }, [])
  }

  return filterItems(items)
}

export const get = async () => {
  return {}
}

export const reducer = createReducer({}, {})