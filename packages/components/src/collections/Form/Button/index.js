import React from 'react'
import { Button } from '@chakra-ui/react'
import { useFormikContext } from 'formik'

const defaultProps = {}
const propTypes = {}

export const FormButton = props => {
  const formik = useFormikContext()

  return (
    <Button
      mt={4}
      colorScheme='teal'
      type='submit'
      isLoading={formik.isSubmitting}
      disabled={formik.isSubmitting}
      {...props}
    />
  )
}

FormButton.defaultProps = defaultProps
FormButton.propTypes = propTypes

export default FormButton