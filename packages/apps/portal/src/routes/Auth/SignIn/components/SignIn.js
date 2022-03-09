import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Input, Button } from '../../components'
import * as S from './SignIn.styles'

const propTypes = {}
const defaultProps = {}

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/cadastrar')
    if (showPassword) {
      navigate('/cadastrar')
    }
    setShowPassword(true)
  }

  return (
    <S.Container>
      <FormContainer>
        <S.Field>
          <Input label='CPF' disabled={showPassword} />
        </S.Field>
        {
          showPassword && (
            <S.Field>
              <Input type='password' label='Senha' />
            </S.Field>
          )
        }
        
        <S.Actions>
          <Button onClick={handleSignIn}>Entrar</Button>
          {/* <S.Link to='/cadastrar'>Não tenho cadastro</S.Link> */}
        </S.Actions>
      </FormContainer>
    </S.Container>
  )
}

SignIn.defaultProps = defaultProps
SignIn.propTypes = propTypes

export default SignIn