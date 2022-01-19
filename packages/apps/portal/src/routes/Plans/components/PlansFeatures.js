import React from 'react'
import * as S from './PlansFeatures.styles'

const Icon = require('./assets/check.png')

const list = [
  { title: 'Aulas e musculação', description: 'Acesso a aulas coletivas e à musculação' },
  { title: 'Aulas e musculação', description: '22 créditos renovados mensalmente para reservar seu horário de treino' },
  { title: 'Aulas e musculação', description: 'Acesso a todas as academias da rede' },
  { title: 'Aulas e musculação', description: 'O valor é cobrado mensalmente no seu cartão de crédito, com permanência mínima de 12 meses' },
  { title: 'Aulas e musculação', description: 'Após o período de carência, não há taxa de cancelamento' },
  { title: 'Aulas e musculação', description: 'Caso seja solicitado o cancelamento do plano antes de 12 meses, será cobrada multa de 20% do valor do contrato' },
  { title: 'Aulas e musculação', description: 'Plano instransferível' },
  { title: 'Aulas e musculação', description: 'A solicitação de cancelamento deve ser feita com 30 dias de antecedência' },
]

export const PlansFeatures = ({ t }) => (
  <S.Container>
    <S.Content>
      <S.Header>
        <S.Title>Todos os planos incluem:</S.Title>
      </S.Header>
      <S.List>
        {list.map(({ title, description }, index) => (
          <S.Item key={index}>
            <S.Icon>
              <img src={Icon} alt='check' />
            </S.Icon>
            <S.ItemTitle>{title}</S.ItemTitle>
            <S.ItemDescription>{description}</S.ItemDescription>
          </S.Item>
        ))}
      </S.List>
    </S.Content>
  </S.Container>
)

export default PlansFeatures
