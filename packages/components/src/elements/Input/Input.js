import React, { useState } from 'react'
import styled from 'styled-components'
import * as S from './Input.styles'

const InputComponent = ({ placeholder, className, inputRef, ...rest }) => {
  const [value, setValue] = useState(null)

  return (
    <S.Container className={className}>
      {value === null && placeholder && (
        <S.Placeholder>{placeholder}</S.Placeholder>
      )}
      <S.Input
        contentEditable='true'
        onChange={({ target }) => setValue(target.value || null)}
        ref={inputRef}
        {...rest}
      />
    </S.Container>
  )
}

export default styled(InputComponent)``
