import React from 'react'
import * as S from './Form.styles'

const propTypes = {}
const defaultProps = {}

const Form = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Main>
          <S.Title>Informações de pagamento</S.Title>
          <S.FormGroup>
            <S.Header>
              <S.FormTitle>
                Dados pessoais
              </S.FormTitle>
            </S.Header>
            <S.Form>
              <S.FormRow>
                <S.Field>
                  <S.Input
                    type='text'
                    name='fullname'
                    placeholder='nome completo'
                  />
                </S.Field>
                <S.Field>
                  <S.Input
                    type='text'
                    name='phone'
                    placeholder='celular'
                  />
                </S.Field>
              </S.FormRow>

              <S.FormRow>
                <S.Field>
                  <S.Input
                    type='email'
                    name='email'
                    placeholder='e-mail'
                  />
                </S.Field>
                <S.Field>
                  <S.Input
                    type='text'
                    name='birthdate'
                    placeholder='data de nascimento'
                  />
                </S.Field>
              </S.FormRow>

              <S.FormRow>
                <S.Field>
                  <S.Input
                    type='text'
                    name='cpf'
                    placeholder='cpf'
                  />
                </S.Field>
                <S.Field>
                  <S.Input
                    type='text'
                    name='gender'
                    placeholder='gênero'
                  />
                </S.Field>
              </S.FormRow>
            </S.Form>
          </S.FormGroup>

          <S.FormGroup>
            <S.Header>
              <S.FormTitle>
                Endereço de pagamento
              </S.FormTitle>
            </S.Header>
            <S.Form>
              <S.FormRow>
                <S.Field>
                  <S.Input
                    type='text'
                    name='cep'
                    placeholder='cep'
                  />
                </S.Field>
                <S.Field>
                  <S.Input
                    type='text'
                    name='address'
                    placeholder='endereço'
                  />
                </S.Field>
              </S.FormRow>

              <S.FormRow>
                <S.Field>
                  <S.Input
                    type='text'
                    name='neighborhood'
                    placeholder='bairro'
                  />
                </S.Field>
                <S.Field>
                  <S.Input
                    type='text'
                    name='streetNumber'
                    placeholder='número'
                  />
                </S.Field>
              </S.FormRow>

              <S.FormRow>
                <S.Field>
                  <S.Input
                    type='text'
                    name='city'
                    placeholder='cidade'
                  />
                </S.Field>
                <S.Field>
                  <S.Input
                    type='text'
                    name='state'
                    placeholder='UF'
                  />
                </S.Field>
              </S.FormRow>
            </S.Form>
          </S.FormGroup>

          <S.FormGroup>
            <S.Header>
              <S.FormTitle>
                Dados do cartão
              </S.FormTitle>
            </S.Header>
            <S.Form>
              <S.Field>
                <S.Input
                  type='text'
                  name='creditCardNumber'
                  placeholder='Número do cartão'
                />
              </S.Field>
              <S.Field>
                <S.Input
                  type='text'
                  name='creditCardOwnerName'
                  placeholder='Nome do titular'
                />
              </S.Field>
              <S.FormRow>
                <S.Field>
                  <S.Input
                    type='text'
                    name='creditCardExpiredDate'
                    placeholder='mm/aa'
                  />
                </S.Field>
                <S.Field>
                  <S.Input
                    type='text'
                    name='creditCardCVV'
                    placeholder='CVV'
                  />
                </S.Field>
              </S.FormRow>
            </S.Form>
          </S.FormGroup>
        </S.Main>
      </S.Content>
    </S.Container>
  )
}

Form.defaultProps = defaultProps
Form.propTypes = propTypes

export default Form
