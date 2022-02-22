import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Input, Radio, Button } from '../../../components'
import * as S from './Token.styles'

const propTypes = {}
const defaultProps = {}

const ConfirmToken = ({ setTokenWasSent }) => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <FormContainer>
        <S.Header>
          <S.Title>
            Digite o código que foi enviado
          </S.Title>
        </S.Header>
        <S.Field>
          <Input placeholder='Token' />
        </S.Field>
        <S.Actions>
            <Button onClick={() => navigate('/cadastrar/success')}>Confirmar</Button>
          <S.OthersActions>
            <S.Link onClick={() => setTokenWasSent(true)}>Reenviar código por SMS</S.Link>
            <S.Link onClick={() => setTokenWasSent(true)}>Reenviar código por E-mail</S.Link>
          </S.OthersActions>
        </S.Actions>
      </FormContainer>
    </S.Container>
  )
}

const Token = () => {
  const [tokenWasSent, setTokenWasSent] = useState(false)

  if (tokenWasSent) return <ConfirmToken setTokenWasSent={setTokenWasSent} />
  
  return (
    <S.Container>
      <FormContainer>
        <S.Header>
          <S.Title>
            Segurança da sua conta
          </S.Title>
        </S.Header>
        <S.RadioContainer>
          <S.Title>
            Por onde você quer receber o código para ativação da sua conta?
          </S.Title>
          <S.RadioGroup>
            <Radio name='gender' value='email' label='E-mail' />
            <Radio name='gender' value='sms' label='SMS' />
          </S.RadioGroup>
        </S.RadioContainer>
        <S.Actions>
          <Button onClick={() => setTokenWasSent(true)}>Continuar</Button>
        </S.Actions>
      </FormContainer>
    </S.Container>
  )
}

Token.defaultProps = defaultProps
Token.propTypes = propTypes

export default Token
