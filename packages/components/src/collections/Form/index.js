import React from 'react'
import { Formik, Form } from 'formik'
import Button from './Button'
import Input from './Input'

const FormComponent = ({ children, ...rest }) => {
  return (
    <Formik initialValues={{}} {...rest}>
      <Form>{children}</Form>
    </Formik>
  )
}

FormComponent.Button = Button
FormComponent.Input = Input

export default FormComponent