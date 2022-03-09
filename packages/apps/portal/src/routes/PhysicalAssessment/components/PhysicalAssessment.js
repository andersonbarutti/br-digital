import React, { useState } from 'react'
import * as S from './PhysicalAssessment.styles'

const propTypes = {}
const defaultProps = {}

const PhysicalAssessmentList = [
  { id: 1, question: 'No último mês, você sentiu dores no feito independente da pratica atividade fisica? ', answer: null },
  { id: 2, question: 'No último mês, você sentiu dores no feito independente da pratica atividade fisica? ', answer: null },
  { id: 3, question: 'No último mês, você sentiu dores no feito independente da pratica atividade fisica? ', answer: null },
  { id: 4, question: 'No último mês, você sentiu dores no feito independente da pratica atividade fisica? ', answer: null },
]

const Question = props => {
  const { id, question, answer, handleChangeAnswer } = props

  const notAnswer = answer === null || answer === undefined

  return (
    <S.QuestionContainer>
      <S.QuestionContent>
        <S.QuestionTitle>{question}</S.QuestionTitle>
        <S.Answer>
          <S.Option onClick={() => handleChangeAnswer(id, true)} selected={answer}>
            Sim
          </S.Option>
          <S.Option onClick={() => handleChangeAnswer(id, false)} selected={!notAnswer && !answer}>
            Não
          </S.Option>
        </S.Answer>
      </S.QuestionContent>
    </S.QuestionContainer>
  )
}

export const PhysicalAssessment = () => {
  const [physicalAssessment, setPhysicalAssessment] = useState(PhysicalAssessmentList)

  const handleChangeAnswer = (id, newAnswer) => {
    const newPhysicalAssessment = physicalAssessment.map(item => {
      if (item.id === id) {
        return { ...item, answer: newAnswer }
      }

      return item
    })

    setPhysicalAssessment(newPhysicalAssessment)
  }

  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <S.Title>Avaliação</S.Title>
        </S.Header>
        <S.Content>
          <S.List>
            {physicalAssessment.map((item, index) => (
              <Question {...item} handleChangeAnswer={handleChangeAnswer} key={index} />
            ))}
          </S.List>
        </S.Content>
        <S.Footer>
          <S.Button>CONTINUAR</S.Button>
        </S.Footer>
      </S.Main>
    </S.Container>
  )
}

PhysicalAssessment.defaultProps = defaultProps
PhysicalAssessment.propTypes = propTypes

export default PhysicalAssessment
