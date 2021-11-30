import * as R from 'ramda'
import { createRequestTypes } from '@project/core/src/helpers'

describe('(Helpers) createRequestTypes', () => {
  it('Should return an obj with actionsRequest types', () => {
    const base = 'FOO_BAR'
    const requestTypes = createRequestTypes(base)
    const typesKeys = ['REQUESTED', 'SUCCEEDED', 'FAILED']
    const typesValues = [`${base}_REQUESTED`, `${base}_SUCCEEDED`, `${base}_FAILED`]

    expect(R.keys(requestTypes)).toEqual(typesKeys)
    expect(R.values(requestTypes)).toEqual(typesValues)
  })
})
