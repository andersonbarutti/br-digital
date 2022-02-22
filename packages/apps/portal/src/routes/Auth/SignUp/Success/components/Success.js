import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Button } from '../../../components'
import * as S from './Success.styles'

const propTypes = {}
const defaultProps = {}

const Success = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <FormContainer>
        <S.Header>
          <S.Title>
            Pronto! Agora você faz parte da comunidade Bio Ritmo.
          </S.Title>
        </S.Header>
        <S.Actions>
            <Button onClick={() => navigate('/')}>Entrar agora</Button>
        </S.Actions>
      </FormContainer>
    </S.Container>
  )
}

Success.defaultProps = defaultProps
Success.propTypes = propTypes

export default Success
