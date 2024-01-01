// import { db } from '@/lib/db'
// import { Board } from './_miscellaneous/board'
// import Form from './_miscellaneous/form'
import { Suspense } from 'react'
import { Info } from './_components/info'
import { BoardList } from './_components/board-list'
import { Separator } from '@/components/ui/separator'
const page = async () => {
  // const board = await db.board.findMany()
  return (
    // <div className="flex flex-col space-y-4">
    //   <Form />
    //   <div>
    //     {board.map((board) => (
    //       <Board title={board.title} id={board.id} key={board.id} />
    //     ))}
    //   </div>
    // </div>
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  )
}

export default page
