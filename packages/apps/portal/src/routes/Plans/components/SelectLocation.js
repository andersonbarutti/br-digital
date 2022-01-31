import React from 'react'
import PlansFeatures from './PlansFeatures'
import SelectBranch from './SelectBranch'
import * as S from './SelectLocation.styles'

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
