import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './CartResume.styles'

const propTypes = {}
const defaultProps = {}

export const CartResume = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Content>
        <S.Header isOpen={isOpen} onClick={() => setIsOpen(false)}>
          <S.Close />
          <S.Title>Carrinho</S.Title>
        </S.Header>
        <S.Resume>
          <S.List>
            <S.Item>
              <S.Product>
                <S.ProductDetails>
                  <S.ProductTitle>Plano recorrente</S.ProductTitle>
                  <S.ProductPrice>R$ 287,00</S.ProductPrice>
                </S.ProductDetails>
                <S.ProductDescription>
                  <S.Text>Unidade Paulista</S.Text>
                  <S.Text>Acesso apenas a academia escolhida</S.Text>
                </S.ProductDescription>
              </S.Product>
            </S.Item>
            <S.Item>
              <S.Product>
                <S.ProductDetails>
                  <S.ProductTitle>Taxa de adesão</S.ProductTitle>
                  <S.ProductPrice>R$ 120,00</S.ProductPrice>
                </S.ProductDetails>
              </S.Product>
            </S.Item>
          </S.List>
          <S.Cupom>
            <S.CupomTitle>Possui cupom de desconto?</S.CupomTitle>
            <S.CupomForm>
              <S.Input
                type='text'
                name='cupom'
                placeholder='cupom'
              />
              <S.CupomButton>Aplicar</S.CupomButton>
            </S.CupomForm>
          </S.Cupom>
        </S.Resume>
        <S.Footer>
          <S.Total>
            <S.TotalTitle>Total</S.TotalTitle>
            <S.TotalPrice>R$ 407,00</S.TotalPrice>
          </S.Total>
          <S.Button onClick={() => navigate('/contract')}>
            Finalizar compra
          </S.Button>
        </S.Footer>
      </S.Content>
    </S.Container>
  )
}

CartResume.defaultProps = defaultProps
CartResume.propTypes = propTypes

export default CartResume
