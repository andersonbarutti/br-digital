import React from 'react'
import styled from 'styled-components'
import * as S from './Button.styles'

const ButtonComponent = ({ children, ...rest }) => {
  return <S.ButtonComponent {...rest}>
    <S.ButtonTxt>{children}</S.ButtonTxt>
  </S.ButtonComponent>
}

export default styled(ButtonComponent)``
