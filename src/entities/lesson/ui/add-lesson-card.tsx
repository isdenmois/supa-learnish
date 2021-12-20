import { FC, useState } from 'react'
import { Button } from '@mui/material'

import { LessonInput, useCreateLessonMutation } from 'shared/api'

import { serializeLesson } from '../model'
import { LessonFormCard } from './lesson-form-card'

interface Props {}

export const AddLessonCard: FC<Props> = () => {
  const [edit, setEdit] = useState(false)
  const [, addLesson] = useCreateLessonMutation()

  const onSubmit = async (values: LessonInput) => {
    await addLesson({ data: serializeLesson(values) })
    setEdit(false)
  }

  if (edit) {
    return <LessonFormCard defaultValues={{}} onSubmit={onSubmit} />
  }

  return (
    <Button variant='outlined' onClick={() => setEdit(true)}>
      Add lesson
    </Button>
  )
}
