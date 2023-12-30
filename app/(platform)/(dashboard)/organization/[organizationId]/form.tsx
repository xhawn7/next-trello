'use client'
import { created } from '@/actions/create-board'
import { Button } from '@/components/ui/button'
import FormInput from './form-input'
import React from 'react'
import { useFormState } from 'react-dom'

const Form = () => {
  const initialState = { message: '', errors: {} }
  const [state, dispatch] = useFormState(created, initialState)
  return (
    // <form action={created}>
    <form action={dispatch} className="flex gap-x-2">
      <FormInput errors={state?.errors} />
      <Button type="submit">submit</Button>
    </form>
  )
}

export default Form
