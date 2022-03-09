import styled from 'styled-components'
import { media } from '@project/components'
import ArrowIcon from './assets/arrow.png'
import HeaderBg from './assets/br.png'

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

  @media (max-width: 1190px) {
    background-image: none;
  }
  
  ${media.tablet} {
    padding: 40px 10px 96px;
    background-image: none !important;
  }

  ${media.mobile} {
    padding: 30px 3px 96px;
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
  rotate: 180deg;
  transform: rotate(180deg);
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

  .swiper-pagination {
    display: none;
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

    ${media.mobile} {
      width: 286px;
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

  ${media.mobile} {
    font-size: 17px;
  }
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

export const Modal = styled.div`
  inset: auto !important;
  width: 480px;
  min-height: 420px;
  max-height: 600px;

  ${media.tablet} {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
`
export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75) !important;
  z-index: 9999;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ModalBody = styled.div`
  padding-bottom: 20px;
`
export const ModalContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  padding: 0 10px;
`
export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  padding: 26px 0 0;
`
export const ModalTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  text-transform: uppercase;
`
export const ModalClose = styled.div`
  position: absolute;
  top: 4px;
  left: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`