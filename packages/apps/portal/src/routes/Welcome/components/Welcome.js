import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './Welcome.styles'
import userIcon from './assets/userIcon.png'

const propTypes = {}
const defaultProps = {}

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Main>
        <S.Content>
          <S.Header>
            <S.Avatar>
              <img src={userIcon} alt='user' />
            </S.Avatar>
            <S.Title>Olá, Danilo</S.Title>
            <S.Description>
              Vá até a recepção da academia escolhida e comece a treinar!
            </S.Description>
          </S.Header>
          <S.Footer>
            <S.Button onClick={() => navigate('/')}>
              Voltar para a home
            </S.Button>
          </S.Footer>
        </S.Content>
      </S.Main>
    </S.Container>
  )
}

Welcome.defaultProps = defaultProps
Welcome.propTypes = propTypes

export default Welcome
