import React from 'react'
// import T from 'prop-types'
import * as R from 'ramda'
import storage from 'local-storage-fallback'
import { Dropdown } from '@project/components'
import { setCurrLocation } from '@project/core/src/modules/I18n'
import * as S from './ChangeLanguage.styles'

const defaultProps = {}
const propTypes = {}

const I18N_KEY = 'i18nextLng'

const handlerChangeLng = lng => () => {
  setCurrLocation(window.location)
  window.location.assign(`/i18n?lng=${lng}`)
}

const options = [
  {
    title: 'English (US)',
    shortcut: 'EN',
    key: 'en',
    onClick: handlerChangeLng('en'),
  },
  {
    title: 'Português (Brasil)',
    shortcut: 'PT-BR',
    key: 'pt_BR',
    onClick: handlerChangeLng('pt_BR'),
  },
]

export const ListLanguage = () => {
  const activeI18N = storage.getItem(I18N_KEY)
  const isActive = R.equals(R.toUpper(activeI18N))

  return (
    <S.I18nContainer>
      {options.map(({ title, onClick, key }) => (
        <S.I18nOption onClick={onClick} key={key} active={isActive(key)}>
          {title}
        </S.I18nOption>
      ))}
    </S.I18nContainer>
  )
}

export const ChangeLanguage = () => {
  const activeI18N = storage.getItem(I18N_KEY)
  const current = R.find(R.propEq('key', activeI18N), options)

  return (
    <Dropdown items={options} trigger={['click']} placement='topCenter'>
      <S.CurrentLanguage>
        {current?.title}
      </S.CurrentLanguage>
    </Dropdown>
  )
}

ChangeLanguage.defaultProps = defaultProps
ChangeLanguage.propTypes = propTypes

export default ChangeLanguage
