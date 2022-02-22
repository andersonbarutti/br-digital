import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Field = styled.div`
  margin-bottom: 24px;
`

export const Title = styled.div``

export const RadioContainer = styled.div`
  margin-bottom: 24px;
  & > ${Title} {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: ${props => props.theme.colors.white};
    margin-bottom: 32px;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
`

export const OthersActions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const Link = styled.div`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-size: 14px;
  font-weight: normal;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 5px;

  &:focus {
    outline: none;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  ${Title} {
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
  }
`