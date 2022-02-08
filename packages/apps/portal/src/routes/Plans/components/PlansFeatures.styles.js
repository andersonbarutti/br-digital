import styled from 'styled-components'
import { media } from '@project/components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 20px;
  max-width: 1195px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100% !important;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background: #C4C4C4;
    margin: 0 8px !important;
    &.swiper-pagination-bullet-active {
      background: #171717;
    }
  }
`
export const Header = styled.div`
  margin-bottom: 56px;
`
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 1190px) {
    display: none;
  }
`
export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-transform: uppercase;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 56px;
`
export const ItemTitle = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  text-transform: uppercase;
`
export const ItemDescription = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  text-align: center;
  max-width: 200px;
`
export const Icon = styled.div`
  margin-bottom: 32px;
`

export const SwiperList = styled.div`
  width: 100%;

  @media (min-width: 1191px) {
    display: none;
  }
`
