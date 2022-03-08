import React from 'react'

const propTypes = {}

const defaultProps = {}

const PhysicalAssessment = ({ data, t }) => {
  return (
    <>
      {t('title', 'Title fallback')}
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

PhysicalAssessment.defaultProps = defaultProps
PhysicalAssessment.propTypes = propTypes

export default PhysicalAssessment
