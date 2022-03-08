import styled from 'styled-components'
import ResumeBg from './assets/bg.png'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 116px 30px;
`
export const Main = styled.div`
  display: flex;
  max-width: 787px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onBackground};
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 43px 51px;
  width: 100%;
  flex: 1;
`
export const Header = styled.div`
  margin-bottom: 76px;
`
export const Title = styled.div`
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  margin-bottom: 35px;
  font-weight: bold;
`
export const Subtitle = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: normal;
`
export const UploadContainer = styled.div`
  margin-bottom: 27px;
`
export const Upload = styled.div`
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 50%;
  width: 92px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`
export const UploadLabel = styled.div`
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
`
export const UploadIcon = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Terms = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const Link = styled.a`
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover, &:focus {
    opacity: 0.8;
  }
`

export const Checkbox = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
  margin-bottom: 22px;

  ${Link} {
    text-decoration: underline;
  }
`
export const Button = styled.div`
  padding: 9px 46px;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onSecondary};
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  width: fit-content;
  cursor: pointer;

  &:hover, &:focus {
    opacity: 0.8;
    outline: none;
  }
`

export const ResumeContainer = styled.div`
  position: relative;
  width: 269px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${props => props.theme.colors.white};
  padding: 40px;
  align-items: center;
  background: url(${ResumeBg});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.28);
  `	
export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const PlanTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 3px;
  text-align: center;
`
export const BranchName = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 41px;
`
export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`
export const Currency = styled.div`
  font-size: 26px;
  line-height: 30px;
  font-weight: normal;
  margin-right: 5px;
`
export const Value = styled.div`
  font-size: 40px;
  line-height: 47px;
  font-weight: 700;
`
export const Details = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: normal;
  text-align: center;
`
