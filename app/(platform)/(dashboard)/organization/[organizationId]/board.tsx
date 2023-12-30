import { deleted } from '@/actions/delete-board'
import { Button } from '@/components/ui/button'
interface BoardProps {
  title: string
  id: string
}

export const Board = ({ title, id }: BoardProps) => {
  const deletedBoard = deleted.bind(null, id)
  return (
    <form action={deletedBoard} className="flex items-center gap-x-2">
      <p>board title:{title}</p>
      <Button variant="destructive" size="sm">
        delete
      </Button>
    </form>
  )
}
