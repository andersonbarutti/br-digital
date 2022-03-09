import { media } from '@project/components'
import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  position: relative;
  
  select {
    background-color: transparent;
    color: white;
    padding: 0;
    min-width: 250px;
    border: none;
    font-size: 22px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    appearance: button;
    font-family: 'Roboto';
    font-weight: 700;
    padding-right: 10px;
    outline: none;
    text-transform: uppercase;

    ${media.tablet} {
      font-size: 18px;
    }

    option {
      padding: 30px;
      color: black;
    }
  }

  &:hover::before {
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const Label = styled.div`
  display: flex;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 22px;
  margin-right: 5px;
  text-transform: uppercase;
  padding: 1px 0;

  ${media.tablet} {
    font-size: 18px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;

  ${media.mobile} {
    flex-direction: column;
  }
`