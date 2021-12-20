import { FC, useState } from 'react'
import { Card, CardContent } from '@mui/material'
import { useEditWeekLessonMutation, WeekLesson, WeekLessonInput } from 'shared/api'

import { serializeWeekLesson } from '../model'
import { WeekLessonCard } from './week-lesson-card'
import { WeekLessonForm } from './week-lesson-form'

interface Props {
  weekLesson: WeekLesson
}

export const EditWeekLesson: FC<Props> = ({ weekLesson }) => {
  const [, editWeekLesson] = useEditWeekLessonMutation()
  const [edit, setEdit] = useState(false)

  const onSubmit = async (values: WeekLessonInput) => {
    await editWeekLesson({ id: weekLesson._id, data: serializeWeekLesson(values) })
    setEdit(false)
  }

  if (edit) {
    return (
      <Card>
        <CardContent>
          <WeekLessonForm
            submitLabel='Edit lesson'
            defaultValues={{ ...weekLesson, lesson: { connect: weekLesson.lesson._id } }}
            onCancel={() => setEdit(false)}
            onSubmit={onSubmit}
          />
        </CardContent>
      </Card>
    )
  }

  return <WeekLessonCard weekLesson={weekLesson} onEdit={() => setEdit(true)} />
}
