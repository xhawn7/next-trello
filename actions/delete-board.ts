'use server'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function deleted(id: string) {
  await db.board.delete({
    where: {
      id
    }
  })
  revalidatePath('/organization/org_2Zn06TVwcvvJiST7iw0gQerVNHa')
}
