import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Input, Button } from '../../../components'
import * as S from './Password.styles'

const propTypes = {}
const defaultProps = {}

const Password = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <FormContainer>
        <S.Field>
          <Input type='password' label='Senha' />
        </S.Field>
        <S.Field>
          <Input type='password' label='Confirme a senha' />
        </S.Field>
        <S.Actions>
          <Button onClick={() => navigate('/cadastrar/token')}>Continuar</Button>
        </S.Actions>
      </FormContainer>
    </S.Container>
  )
}

Password.defaultProps = defaultProps
Password.propTypes = propTypes

export default Password
