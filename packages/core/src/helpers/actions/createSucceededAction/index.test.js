import { createSucceededAction } from '@project/core/src/helpers'

describe('(Helpers) createSucceededAction', () => {
  it('Should return an action with type and payload', () => {
    const requestTypes = { SUCCEEDED: 'FOO_BAR' }
    const actionPayload = 'foo_bar'

    const action = createSucceededAction(requestTypes)
    const { type, payload } = action(actionPayload)

    expect(type).toBe(requestTypes.SUCCEEDED)
    expect(payload).toBe(actionPayload)
  })

  it('Should return an action with meta passed in first call', () => {
    const requestTypes = { SUCCEEDED: 'FOO_BAR' }
    const actionMeta = 'foo_bar'

    const action = createSucceededAction(requestTypes, actionMeta)
    const { type, meta } = action()

    expect(type).toBe(requestTypes.SUCCEEDED)
    expect(meta).toBe(actionMeta)
  })

  it('Should return an action with meta passed in second call', () => {
    const requestTypes = { SUCCEEDED: 'FOO_BAR' }
    const actionMeta = 'foo_bar'

    const action = createSucceededAction(requestTypes)
    const { type, meta } = action('', actionMeta)

    expect(type).toBe(requestTypes.SUCCEEDED)
    expect(meta).toBe(actionMeta)
  })
})
