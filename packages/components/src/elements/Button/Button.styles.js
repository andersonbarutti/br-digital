import styled from 'styled-components'

export const ButtonComponent = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 1.8rem;
  width: 100%;
  min-width: 0;
  height: 30px;
  font-size: 1.5rem;
  outline: none;
  border: transparent;
  padding: 0.9rem 1.2rem 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
  & + & {
    margin: 0;
  }
`

export const ButtonTxt = styled.span`
  ${({ theme }) => theme.utils.ellipsis};
` 
