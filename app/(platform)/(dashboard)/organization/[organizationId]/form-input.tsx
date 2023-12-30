import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormStatus } from 'react-dom'

interface FormInputProps {
  errors?: {
    title?: string[]
  }
}
const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus()
  return (
    <div className="flex flex-col space-y-2">
      <Input
        type="text"
        className="border p-1"
        name="title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors?.title?.map((err: string) => (
            <p className="text-rose-500" key={err}>
              {err}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default FormInput
