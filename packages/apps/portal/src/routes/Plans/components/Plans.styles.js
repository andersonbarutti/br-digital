import styled from 'styled-components'
import { media } from '@project/components'
import ArrowIcon from './assets/arrow.png'
import HeaderBg from './assets/br.png'

export const modalCustomStyles = {
  content: {
    width: '382px',
    height: '318px',
    zIndex: '9999',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: '9999',
  }
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.surface};
  width: 100%;
`

export const Header = styled.div`
  padding: 98px 48px 156px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${HeaderBg});
  background-repeat: no-repeat;
  background-position: right;

  ${media.mobile} {
    padding: 40px 24px 96px;
    background-image: none !important;
  }
`
export const Content = styled.div`
  max-width: 1140px;
  width: 100%;
  color: white;
`

export const Selector = styled.div`
  margin-bottom: 51px;
`

export const Prev = styled.div.attrs({ className: 'swiper-prev' })`
  background-image: url(${ArrowIcon}) !important;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  cursor: pointer;
  rotate: 180deg;
  transform: rotate(180deg);

  @media (max-width: 1190px) {
    width: 50px;
    background-position: center !important;
  }

  &:hover {
    opacity: 0.8;
  }

  &.swiper-button-disabled {
    opacity: 0.2;
  }
`
export const Next = styled.div.attrs({ className: 'swiper-next' })`
  background-image: url(${ArrowIcon}) !important;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 1190px) {
    width: 50px;
    background-position: center !important;
  }

  &:hover {
    opacity: 0.8;
  }
  &.swiper-button-disabled {
    opacity: 0.2;
  }
`

export const List = styled.div`
  max-width: 1140px;
  display: flex;
  align-items: center;

  .swiper {
    width: 100%;
    height: 100%;
    max-width: 980px;
  }

  .swiper-slide {
    width: 300px;
    height: 385px;

    @media (max-width: 1190px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 385px;
  width: 300px;
`

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: 1px solid white;
  width: 100%;
`
export const Footer = styled.div`
  min-height: 75px;
  width: 100%;
`
export const Highlight = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  span {
    font-size: 18px;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const PlanType = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 23px;
  text-transform: uppercase;
`

export const Price = styled.div`
  span {
    font-size: 26px;
    font-weight: 400;
    margin-right: 5px;
  }

  strong {
    font-size: 40px;
    font-weight: 900;
  }
  line-height: 30px;
  margin-bottom: 24px;
`

export const Description = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  margin-bottom: 24px;
  padding: 0 40px;
  text-align: center;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background: white;
  color: black;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-transform: uppercase;
  margin-bottom: 23px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
export const Contract = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-decoration: underline;
`
