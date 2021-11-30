import React from 'react'

const propTypes = {}

const defaultProps = {}

const <%= pascalEntityName %> = ({ data, t }) => {
  return (
    <>
      {t('title', 'Title fallback')}
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

<%= pascalEntityName %>.defaultProps = defaultProps
<%= pascalEntityName %>.propTypes = propTypes

export default <%= pascalEntityName %>
