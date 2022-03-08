import React, { useRef, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { compose } from 'recompose'
import Select from 'react-select'
import { connectState } from '@project/core'
import * as S from './SelectBranch.styles'

const SelectBranch = props => {
  const isFocusedRef = useRef(false)
  const navigate = useNavigate()
  const { slug } = useParams()
  const { list = [] } = props

  const options = list.map(item => ({
    value: item.slug,
    label: item.name,
  }))

  const selectedOption = useMemo(() => {
    const selectedOption = options.find(item => item.value === slug)
    return selectedOption || null
  }, [options, slug])

  const customStyles = useMemo(
    () => ({
      container: (base, state) => {
        isFocusedRef.current = state.isFocused
        return {
          ...base,
          display: 'inline-block',
          background: 'black',
          color: 'white'
        }
      },
      control: styles => ({
        ...styles,
        border: 'none',
        fontSize: '22px',
        textTransform: 'uppercase',
        fontFamily: 'Roboto',
        fontWeight: '700',
      }),
      menu: styles => ({
        ...styles,
        background: 'black',
        minWidth: '250px',
        zIndex: '9999',
      }),
      option: (styles, { isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isSelected
            ? 'white'
            : isFocused
            ? 'white'
              : 'black',
          color: isSelected || isFocused ? 'black' : 'white',
          cursor: 'pointer',
          ':active': {
            ...styles[':active'],
            backgroundColor: 'black'
          },
        }
      },
      placeholder: (base, state) => {
        return {
          ...base,
          ...(isFocusedRef.current && state.value
            ? {}
            : {
                position: 'static',
                top: 'auto',
                transform: 'none'
              })
        }
      },
      input: (base, state) => {
        return {
          ...base,
          ...(isFocusedRef.current && state.value
            ? {}
            : {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)'
              })
        }
      },
      singleValue: (base, state) => {
        return {
          ...base,
          maxWidth: 'none',
          ...(isFocusedRef.current && state.value
            ? {}
            : {
                position: 'static',
                top: 'auto',
                transform: 'none'
              })
        }
      }
    }),
    []
  )

  return (
    <S.Container>
      {slug && <S.Label>Unidade selecionada:</S.Label>}
      <Select
        styles={customStyles}
        isSearchable={false}
        isDisabled={false}
        isLoading={false}
        isClearable={false}
        isMulti={false}
        isOpen={false}
        value={selectedOption}
        onChange={v => {
          navigate(`/unidade/${v.value}`)
        }}
        options={options}
        placeholder='Selecionar unidade'
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            primary25: 'white',
            primary: 'black'
          }
        })}
      />
    </S.Container>
  )
}

const enhance = compose(
  connectState('location'),
)

export default enhance(SelectBranch)
