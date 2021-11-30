import styled from 'styled-components'

export const Placeholder = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.onSurface};
  position: absolute;
  top: calc(50% - 12px);
  user-select: none;
  ${({ theme }) => theme.utils.ellipsis};
  left: 15px;
  right: 2px;
`

export const Input = styled.input`
  cursor: text;
  flex: 1;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 0;
  z-index: 1;
`

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.input};
  border-radius: 1.8rem;
  height: 4rem;
  width: 100%;
  min-width: 0;
  font-size: 1.5rem;
  outline: none;
  border: transparent;
  padding: 0.9rem 1.2rem 1.1rem;
  display: flex;
  position: relative;
`
