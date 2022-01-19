import React from 'react'
import { useNavigate } from 'react-router-dom'
import PlansFeatures from './PlansFeatures'
import * as S from './SelectLocation.styles'

export const SelectBranch = ({ title }) => {
  const navigate = useNavigate()

  return (
    <S.SelectContainer>
      <select onChange={() => navigate('unidade/paulista')}>
        <option>{title || 'Selecionar unidade'}</option>
        <option>Paulista</option>
        <option>Santo Amaro</option>
        <option>Faria Lima</option>
      </select>
    </S.SelectContainer>
  )
}

export const SelectLocation = () => (
  <S.Container>
      <S.HeaderContainer>
        <S.Header>
          <S.Content>
            <S.Title>Encontre a sua Bio</S.Title>
            <S.Subtitle>Selecione uma unidade para conhecer melhor os planos</S.Subtitle>
            <SelectBranch />
          </S.Content>
          <S.Banner />
        </S.Header>
      </S.HeaderContainer>
    <PlansFeatures />
  </S.Container>
)

export default SelectLocation
