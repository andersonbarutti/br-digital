import { createAction } from '@project/core/src/helpers'

describe('(Helpers) createAction', () => {
  it('Should return an action with type and payload', () => {
    const actionType = 'FOO_BAR'
    const actionPayload = 'foo_bar'

    const action = createAction(actionType)
    const { type, payload } = action(actionPayload)

    expect(type).toBe(actionType)
    expect(payload).toBe(actionPayload)
  })

  it('Should return an action with meta passed in first call', () => {
    const actionType = 'FOO_BAR'
    const actionMeta = 'foo_bar'

    const action = createAction(actionType, actionMeta)
    const { type, meta } = action()

    expect(type).toBe(actionType)
    expect(meta).toBe(actionMeta)
  })

  it('Should return an action with meta passed in second call', () => {
    const actionType = 'FOO_BAR'
    const actionMeta = 'foo_bar'

    const action = createAction(actionType)
    const { type, meta } = action('', actionMeta)

    expect(type).toBe(actionType)
    expect(meta).toBe(actionMeta)
  })
})
