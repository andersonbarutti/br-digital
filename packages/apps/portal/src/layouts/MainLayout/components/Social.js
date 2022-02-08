import React from 'react'
import * as S from './Social.styles'

import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Spotify from '../assets/spotify.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtube.png'

export default function Social() {
  return (
    <S.Container>
      <S.Item>
        <img src={Facebook} alt='facebook' />
      </S.Item>
      <S.Item>
        <img src={Instagram} alt='instagram' />
      </S.Item>
      <S.Item>
        <img src={Spotify} alt='spotify' />
      </S.Item>
      <S.Item>
        <img src={Twitter} alt='twitter' />
      </S.Item>
      <S.Item>
        <img src={Youtube} alt='youtube' />
      </S.Item>
    </S.Container>
  )
}
