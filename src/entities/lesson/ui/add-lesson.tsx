import { FC, useState } from 'react'
import { Button } from '@mui/material'
import { AddLessonForm } from './add-lesson-form'

interface Props {}

export const AddLesson: FC<Props> = () => {
  const [edit, setEdit] = useState(false)

  if (edit) {
    return <AddLessonForm onDone={() => setEdit(false)} />
  }

  return (
    <Button variant='outlined' onClick={() => setEdit(true)}>
      Add lesson
    </Button>
  )
}
