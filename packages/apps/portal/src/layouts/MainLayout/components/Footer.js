import React from 'react'
import * as S from './Footer.styles'
import Social from './Social'

const Logo = require('../assets/biologo.png')
const Apple = require('../assets/appstore.png')
const Google = require('../assets/googleplay.png')

export default function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.Top>
          <S.Logo>
            <img src={Logo} alt='bioritmo' width='162' height='27' />
          </S.Logo>
          <S.Menu>
            <S.MenuList>
              <S.MenuItem>
                <S.MenuItemLink>Treinos</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuItemLink>Programas</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuItemLink>Ajuda</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuItemLink>Horários de treinos</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuItemLink>Sobre a Bio</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuItemLink>Imprensa</S.MenuItemLink>
              </S.MenuItem>
            </S.MenuList>
          </S.Menu>
          <Social />
        </S.Top>
        <S.Divider size={1} />
        <S.Bottom>
          <S.Actions>
            <S.Links>
              <S.MenuItem>
                <S.MenuItemLink>Trabalhe conosco</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuItemLink>Termos e condições</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuItemLink>Portal de privacidade</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuItemLink>Contato</S.MenuItemLink>
              </S.MenuItem>
            </S.Links>
            <S.Copyright>Copyright © 2021 Academia Bio Ritmo</S.Copyright>
          </S.Actions>
          <S.AppContent>
            <S.AppContentTitle>
              Conheça nosso App! Baixe agora:
            </S.AppContentTitle>
            <S.Stores>
              <img src={Apple} alt='appstore' width={122} height={36} />
              <img src={Google} alt='googleplay' width={122} height={36} />
            </S.Stores>
          </S.AppContent>
        </S.Bottom>
      </S.Content>
    </S.Container>
  )
}
