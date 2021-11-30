import * as R from 'ramda'

export const createSingleInitialState = R.compose(
  R.merge(R.objOf('isFetching', false)),
  R.flip(R.objOf)({}),
  R.prop('resource'),
)

export default createSingleInitialState
