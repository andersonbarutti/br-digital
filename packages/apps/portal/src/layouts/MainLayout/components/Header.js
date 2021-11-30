import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './Header.styles'

export default function Header() {
  return (
    <S.Container>
      <h1>Header</h1>
      <nav>
        <Link to='/ITA'>ITA</Link>
        <br />
        <br />
        <Link to='/BEL'>BEL</Link>
      </nav>
    </S.Container>
  )
}
