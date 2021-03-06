import { FC, useState } from 'react'
import { Button } from '@mui/material'

import { useAddWeekLessonMutation, WeekLessonInput } from 'shared/api'

import { serializeWeekLesson } from '../model'
import { WeekLessonForm } from './week-lesson-form'

interface Props {
  weekday: number
}

export const AddWeekLesson: FC<Props> = ({ weekday }) => {
  const [, addWeekLesson] = useAddWeekLessonMutation()
  const [edit, setEdit] = useState(false)

  const onSubmit = async (values: WeekLessonInput) => {
    await addWeekLesson({ data: serializeWeekLesson(values) })
    setEdit(false)
  }

  if (edit) {
    return (
      <WeekLessonForm
        submitLabel='Add lesson'
        defaultValues={{ weekday, duration: 30, lesson: { create: {} } }}
        onCancel={() => setEdit(false)}
        onSubmit={onSubmit}
      />
    )
  }

  return (
    <Button variant='outlined' onClick={() => setEdit(true)}>
      Add lesson
    </Button>
  )
}
