import styled from 'styled-components'
import { Link as LinkComponent } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Field = styled.div`
  margin-bottom: 16px;
`

export const Title = styled.div``

export const RadioContainer = styled.div`
  padding: 24px 0;
  & > ${Title} {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: ${props => props.theme.colors.white};
    margin-bottom: 32px;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > *:first-child {
    margin-right: 30px;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
`

export const Link = styled(LinkComponent)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 23px;

  &:focus {
    outline: none;
  }

  &:hover {
    text-decoration: underline;
  }
`