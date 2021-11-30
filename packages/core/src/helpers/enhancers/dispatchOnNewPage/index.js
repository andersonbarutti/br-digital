import { withHandlers } from 'recompose'

export const dispatchOnNewPage = actionCreator => (
  withHandlers({
    handleNewPage: props => () => props.dispatch(actionCreator(props)),
  })
)

export default dispatchOnNewPage
