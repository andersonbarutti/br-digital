import styled from 'styled-components'
import { media } from '@project/components'
import BannerImg from './assets/bg.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.surface};
  width: 100%;
`

export const HeaderContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 544px;
  height: 544px;

  ${media.mobile} {
    min-height: 600px;
  }
`

export const Header = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  align-items: center;

  ${media.mobile} {
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Content = styled.div`
  padding: 123px 48px 201px;
  width: 100%;
  max-width: 504px;
  color: white;

  ${media.mobile} {
    flex-direction: column;
    padding: 28px 24px 63px;
  }
`

export const Banner = styled.div`
  position: relative;
  background: url(${BannerImg}) no-repeat;
  background-size: cover;
  background-position: center;
  flex: 1;
  height: 100%;
  overflow: hidden;

  ${media.mobile} {
    height: 231px;
    width: 100%;
    background-size: initial;
    background-position: 33% 91%;
  }

  &::before {
    content: '';
    width: 300px;
    height: 1000px;
    background: black;
    position: absolute;
    top: -200px;
    left: -247px;
    transform: rotate(12deg);

    ${media.mobile} {
      display: none;
    }
  }
`

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 46px;
  margin-bottom: 31px;

  ${media.mobile} {
    font-size: 34px;
    margin-bottom: 26px;
    max-width: 265px;
  }
`
export const Subtitle = styled.div`
  font-size: 22px;
  line-height: 25px;
  font-weight: 400;
  max-width: 410px;
  margin-bottom: 52px;
`
