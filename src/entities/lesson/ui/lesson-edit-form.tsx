import { FC } from 'react'

import { Lesson, LessonInput } from 'shared/api'
import { useUpdateLessonMutation } from 'shared/api/lesson'

import { serializeLesson } from '../model'
import { LessonForm } from './lesson-form'

interface Props {
  lesson: Lesson
  onDone(): void
}

export const LessonEditForm: FC<Props> = ({ lesson, onDone }) => {
  const [, updateLesson] = useUpdateLessonMutation()

  const onSubmit = async (values: LessonInput) => {
    await updateLesson({ id: lesson._id, data: { ...serializeLesson(values), isOutdated: false } })
    onDone()
  }

  return <LessonForm defaultValues={lesson} onSubmit={onSubmit} />
}
