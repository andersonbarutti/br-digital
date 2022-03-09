import React, { useState } from 'react'
import Form from './Form'
import CartResume from './CartResume'

import * as S from './Cart.styles'

const propTypes = {}
const defaultProps = {}

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.Content>
        <S.Main isOpen={isOpen}>
          <Form />
        </S.Main>
        <S.Resume isOpen={isOpen}>
          <CartResume setIsOpen={setIsOpen} />
        </S.Resume>
      </S.Content>
      <S.TotalResume onClick={() => setIsOpen(true)} isOpen={isOpen}>
        <S.Total>
          <S.TotalTitle>Total</S.TotalTitle>
          <S.TotalPrice>R$ 407,00</S.TotalPrice>
        </S.Total>
        <S.Open />
      </S.TotalResume>
    </S.Container>
  )
}

Cart.defaultProps = defaultProps
Cart.propTypes = propTypes

export default Cart
