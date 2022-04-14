import * as R from 'ramda'
import React, { useEffect, useState } from 'react'
import { Field } from 'formik'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const defaultProps = {}
const propTypes = {}

export const generateId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

const Dropzone = styled.div`
  color: ${({ theme }) => theme.colors.onBackground};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  user-select: none;
`

const PreviewSection = styled.div`
  width: fit-content;
  margin: auto;
  width: 100%;
`

function Previews({ onChange, multiple, renderInput, value, ...rest }) {
  const [files, setFiles] = useState(value || [])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(x => [
        ...(multiple ? x : []),
        ...acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            id: generateId(),
          })
        ),
      ])
    },
  })

  useEffect(
    () => () => {
      R.is(Array, files) &&
        files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  useEffect(() => {
    onChange(files)
  }, [files, onChange])

  return (
    <PreviewSection {...rest}>
      <Dropzone {...getRootProps()}>
        <input {...getInputProps()} />
        {renderInput && renderInput(files)}
      </Dropzone>
    </PreviewSection>
  )
}

export const Upload = props => {
  const { name, multiple, ...rest } = props

  return (
    <Field name={name}>
      {({ field, form }) => (
        <Previews
          {...field}
          id={name}
          onChange={list => {
            const newValue = R.is(Array, list) ? list : [list]
            form.setFieldValue(name, Array.from(newValue))
          }}
          multiple={multiple}
          {...rest}
        />
      )}
    </Field>
  )
}

Upload.defaultProps = defaultProps
Upload.propTypes = propTypes

export default Upload