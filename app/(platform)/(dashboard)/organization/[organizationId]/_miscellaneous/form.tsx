// 'use client'
// // import { created } from '@/actions/create-board'
// import { createBoard } from '@/actions/create-board'

// import { Button } from '@/components/ui/button'
// import React from 'react'
// import { useAction } from '@/hooks/use-action'
// import { FormInput } from '@/components/form/form-input'
// import { FormSubmit } from '@/components/form/form-submit'
// // import { useFormState, useFormStatus } from 'react-dom'

// const Form = () => {
//   // 进阶
//   // const initialState = { message: '', errors: {} }
//   // const [state, dispatch] = useFormState(created, initialState)
//   // const { pending } = useFormStatus()
//   // 抽象
//   const { execute, fieldErrors } = useAction(createBoard)
//   const onSubmit = (formData: FormData) => {
//     const title = formData.get('title') as string
//     execute({ title })
//   }
//   return (
//     // 基础
//     // <form action={created}>
//     // 进阶
//     // <form action={dispatch} className="flex gap-x-2">
//     //   <FormInput errors={state?.errors} />
//     //   <Button type="submit" disabled={pending}>
//     //     submit
//     //   </Button>
//     // </form>
//     // 抽象
//     <form action={onSubmit} className="flex gap-x-2">
//       <FormInput errors={fieldErrors} id="title" />
//       {/* <Button type="submit">submit</Button> */}
//       <FormSubmit>save</FormSubmit>
//     </form>
//   )
// }

// export default Form
