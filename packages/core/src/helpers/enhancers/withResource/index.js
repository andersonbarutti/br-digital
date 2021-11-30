import { lifecycle } from 'recompose'

// TODO: Use hooks
const withResource = (ns, resources) =>
  lifecycle({
    UNSAFE_componentWillMount() {
      const { i18n } = this.props
      const { addResources, language } = i18n
      addResources(language, ns, resources[language])
    },
  })

export default withResource
