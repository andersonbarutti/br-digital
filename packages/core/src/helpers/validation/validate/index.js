import * as R from 'ramda'

export const validate = (constraints, config = {}) => values => {
  const validatejs = require('validate.js')

  const defaultConfig = { fullMessages: false }
  const _config = R.merge(defaultConfig, config)
  return validatejs(values, constraints, _config) || {}
}

export default validate
