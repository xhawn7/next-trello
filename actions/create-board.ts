'use server'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export type State = {
  message?: string | null
  errors?: {
    title?: string[]
  }
}

const CreateBoard = z.object({
  // title: z.string()
  title: z.string().min(3, {
    message: '必须超过3位字符'
  })
})
// export async function created(formData: FormData) {
export async function created(prev: State, formData: FormData) {
  // const title = formData.get('title') as string
  // const { title } = CreateBoard.parse({
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'missing fields'
    }
  }

  const { title } = validatedFields.data

  try {
    await db.board.create({
      data: {
        title
      }
    })
  } catch (error) {
    return {
      message: 'database error'
    }
  }

  revalidatePath('/organization/org_2Zn06TVwcvvJiST7iw0gQerVNHa')
  redirect('/organization/org_2Zn06TVwcvvJiST7iw0gQerVNHa')
}
