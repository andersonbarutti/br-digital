import styled from 'styled-components'
// import { media } from '@project/components'

export const Container = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const Content = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  padding: 30px 23px;

  @media (max-width: 1060px) {
    flex-direction: column;
    /* display: ${props => (props.isOpen ? 'none' : 'flex')}; */
  }
`
export const Main = styled.div`
  flex: 1;
`
export const Resume = styled.div`
  width: 447px;

  @media (max-width: 1060px) {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;

    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`
export const TotalResume = styled.div`
  position: fixed;
  bottom: 0;
  display: none;
  width: 100%;
  padding: 24px 24px 16px;
  background: white;
  color: black;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px -3px 5px -1px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px -3px 5px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -3px 5px -1px rgba(0,0,0,0.75);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 1060px) {
    display: flex;

    display: ${props => (props.isOpen ? 'none' : 'flex')};
  }
`

export const Close = styled.div`
  width: 55px;
  height: 4px;
  background-color: #171717;
  border-radius: 3px;
`

export const Total = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 21px;
`
export const TotalTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  text-transform: uppercase;
`
export const TotalPrice = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: bold;
  text-transform: uppercase;
`