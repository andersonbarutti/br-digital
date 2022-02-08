import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { compose } from 'recompose'
import { connectState } from '@project/core'
import * as S from './SelectBranch.styles'

const SelectBranch = (props) => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const { list = [] } = props

  return (
    <S.SelectContainer>
      {slug && <S.Label>Unidade selecionada:</S.Label>}
      <select onChange={e => navigate(`/unidade/${e.target.value}`, { replace: true })} defaultValue={slug}>
        {!slug && <option>Selecionar unidade</option>}
        {list.map(({ acronym, name, slug }) => (
          <option key={acronym} value={slug}>{name}</option>
        ))}
      </select>
    </S.SelectContainer>
  )
}

const enhance = compose(
  connectState('location'),
)

export default enhance(SelectBranch)