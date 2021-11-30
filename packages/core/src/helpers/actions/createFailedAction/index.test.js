import { createFailedAction } from '@project/core/src/helpers'

describe('(Helpers) createFailedAction', () => {
  it('Should return an action with type, payload and error', () => {
    const requestTypes = { FAILED: 'FOO_BAR' }
    const actionPayload = 'foo_bar'

    const action = createFailedAction(requestTypes)
    const { type, payload, error } = action(actionPayload)

    expect(type).toBe(requestTypes.FAILED)
    expect(payload).toBe(actionPayload)
    expect(error).toBe(true)
  })

  it('Should return an action with meta passed in first call', () => {
    const requestTypes = { FAILED: 'FOO_BAR' }
    const actionMeta = 'foo_bar'

    const action = createFailedAction(requestTypes, actionMeta)
    const { type, meta } = action()

    expect(type).toBe(requestTypes.FAILED)
    expect(meta).toBe(actionMeta)
  })

  it('Should return an action with meta passed in second call', () => {
    const requestTypes = { FAILED: 'FOO_BAR' }
    const actionMeta = 'foo_bar'

    const action = createFailedAction(requestTypes)
    const { type, meta } = action('', actionMeta)

    expect(type).toBe(requestTypes.FAILED)
    expect(meta).toBe(actionMeta)
  })
})
