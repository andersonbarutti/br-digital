import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;  
  *,
  *:before,
  *:after{
    box-sizing: border-box;
  }  
`
const Label = styled.label`
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
  margin-bottom: 16px;
`

const CheckboxComponent = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  cursor: pointer; 
  user-select:none;
  text-align: left;

  & + span {
    display: inline-block; 
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    &:before {
      content: '';
      display: block; 
      position: absolute;
      top: 0px;
      left: 0px;
      border-radius: 50%;
      margin-right: 5px;
      width: 16px;
      height: 16px;
      border: 1px solid ${props => props.theme.colors.white};
      background: transparent;
    }
    &:after {
      content: '';
      display: block; 
      width: 10px;
      height: 10px;
      background: ${props => props.theme.colors.white};
      position: absolute;
      border-radius: 50%;
      top: 3px;
      left: 3px;
      opacity: 0;
      transform: scale(0,0); 
      transition: all .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
    }
  }
  &:checked+span:after {
    opacity: 1;
    transform: scale(1,1);
  }
`
export const Checkbox = props => {
  const { component: Component } = props
  return (
    <Container>
      <Label>
        <CheckboxComponent {...props} />
        {Component && <span> <Component /></span>}
        {props.label && <span>{props.label}</span>}
      </Label>
    </Container>
  )
}

export default Checkbox