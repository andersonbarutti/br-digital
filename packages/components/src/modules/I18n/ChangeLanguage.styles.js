import styled, { css } from 'styled-components'

const ActiveStyle = css`
  font-weight: bold;
  opacity: 1;
`

export const I18nContainer = styled.div`
  display: flex;
`

export const I18nOption = styled.div`
  font-size: 14px;
  cursor: pointer;
  /* color: ${({ theme }) => theme.colors.white}; */
  user-select: none;
  opacity: 0.7;
  ${({ active }) => active && ActiveStyle}
  &:hover {
    opacity: 1;
  }
  & + & {
    margin-left: 22px;
  }
`

export const CurrentLanguage = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  user-select: none;
  margin-top: 4rem;
  &:hover {
    opacity: 0.7;
  }
`