import { FC, useState } from 'react'

import { Lesson, LessonInput, useUpdateLessonMutation } from 'shared/api'

import { serializeLesson } from '../model'
import { LessonCard } from './lesson-card'
import { LessonFormCard } from './lesson-form-card'

interface Props {
  lesson: Lesson
}

export const EditLessonCard: FC<Props> = ({ lesson }) => {
  const [edit, setEdit] = useState(false)
  const [, updateLesson] = useUpdateLessonMutation()

  const onSubmit = async (values: LessonInput) => {
    await updateLesson({ id: lesson._id, data: { ...serializeLesson(values), isOutdated: false } })
    setEdit(false)
  }

  if (edit) {
    return <LessonFormCard defaultValues={lesson} onSubmit={onSubmit} />
  }

  return <LessonCard lesson={lesson} onEdit={() => setEdit(true)} />
}
