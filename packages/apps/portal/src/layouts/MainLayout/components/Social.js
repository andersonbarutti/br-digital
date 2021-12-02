import React from 'react'
import * as S from './Social.styles'

const Facebook = require('../assets/facebook.png')
const Instagram = require('../assets/instagram.png')
const Spotify = require('../assets/spotify.png')
const Twitter = require('../assets/twitter.png')
const Youtube = require('../assets/youtube.png')

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
