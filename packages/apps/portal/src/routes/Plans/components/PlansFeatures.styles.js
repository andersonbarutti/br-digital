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
  /* width: 361px; */
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
`
export const Icon = styled.div`
  margin-bottom: 32px;
`