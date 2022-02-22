import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Input, Radio, Button } from '../../../components'
import * as S from './Profile.styles'

const propTypes = {}
const defaultProps = {}

const Profile = () => {
  const navigate = useNavigate()
  
  return (
    <S.Container>
      <FormContainer>
        <S.Field>
          <Input name='name' placeholder='Nome completo' />
        </S.Field>
        <S.Field>
          <Input name='email' placeholder='E-mail' />
        </S.Field>
        <S.Field>
          <Input name='birthdate' placeholder='Data de nascimento' />
        </S.Field>
        <S.Field>
          <Input name='cellphone' placeholder='Celular' />
        </S.Field>
        <S.RadioContainer>
          <S.Title>
            Com qual gênero você se identifica?
          </S.Title>
          <S.RadioGroup>
            <Radio name='gender' value='male' label='Masculino' />
            <Radio name='gender' value='female' label='Feminino' />
            <Radio name='gender' value='none' label='Prefiro não informar' />
          </S.RadioGroup>
        </S.RadioContainer>
        <S.Actions>
          <Button onClick={() => navigate('/cadastrar/password')}>Continuar</Button>
        </S.Actions>
      </FormContainer>
    </S.Container>
  )
}

Profile.defaultProps = defaultProps
Profile.propTypes = propTypes

export default Profile
