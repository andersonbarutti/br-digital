import React from 'react'

const propTypes = {}

const defaultProps = {}

const Cart = ({ data, t }) => {
  return (
    <>
      {t('title', 'Title fallback')}
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

Cart.defaultProps = defaultProps
Cart.propTypes = propTypes

export default Cart
