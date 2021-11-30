import { createReducer } from '@project/core'

export const get = async () => {
  return {
    colors: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
    // system or user custom configs
  }
}

export const reducer = createReducer({}, {})
