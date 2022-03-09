import React from 'react'
import * as S from './Contract.styles'

const propTypes = {}
const defaultProps = {}

const Contract = () => {
  return (
    <S.Container>
      <S.Main>
        <S.Content>
          <S.Header>
            <S.Title>
              Sua compra está confirmada!
            </S.Title>
            <S.Subtitle>
              Agora é só assinar o seu contrato e aproveitar
            </S.Subtitle>
          </S.Header>
          <S.UploadContainer>
            <S.Upload>
              <S.UploadLabel>Adicione sua foto</S.UploadLabel>
              <S.UploadIcon>+</S.UploadIcon>
            </S.Upload>
          </S.UploadContainer>
          <S.Footer>
            <S.Terms>
              <S.Checkbox>
                <S.CheckboxEl name='privacy' value='privacy'
                  component={() => <div>Li e concordo com a <S.Link>política de privacidade</S.Link></div>}
                />
              </S.Checkbox>
              <S.Checkbox>
              <S.CheckboxEl name='terms' value='terms'
                  component={() => <div>Li e concordo com os <S.Link>termos de adesão</S.Link></div>}
                />
              </S.Checkbox>
            </S.Terms>
            <S.Button>ASSINAR CONTRATO</S.Button>
          </S.Footer>
        </S.Content>
        <S.ResumeContainer>
          <S.Overlay />
          <S.Resume>
            <S.PlanTitle>
              Plano recorrente
            </S.PlanTitle>
            <S.BranchName>
              Unidade paulista
            </S.BranchName>
            <S.Price>
              <S.Currency>R$</S.Currency>
              <S.Value>354,00</S.Value>
            </S.Price>
            <S.Details>
              Acesso em <strong>ALGUMAS</strong> as academias
            </S.Details>
          </S.Resume>
        </S.ResumeContainer>
      </S.Main>
    </S.Container>
  )
}

Contract.defaultProps = defaultProps
Contract.propTypes = propTypes

export default Contract
