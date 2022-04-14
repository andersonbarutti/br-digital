import React from 'react'
import { Field } from 'formik'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

const defaultProps = {}
const propTypes = {}

export const FormInput = ({
  name,
  label,
  validate,
  required,
  ...rest
}) => {
  const inputValidation = value => {
    if (!validate) {
      return required && !value && 'Required field'
    } else {
      return validate(value)
    }
  }

  return (
    <Field name={name} validate={inputValidation}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <Input
            {...field}
            id={name}
            placeholder={name}
            disabled={form.isSubmitting}
            {...rest}
          />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

Input.defaultProps = defaultProps
FormInput.propTypes = propTypes

export default FormInput