import { FC } from 'react'

import { LessonInput } from 'shared/api'
import { useCreateLessonMutation } from 'shared/api/lesson'

import { serializeLesson } from '../model'
import { LessonForm } from './lesson-form'

interface Props {
  onDone(): void
}

export const AddLessonForm: FC<Props> = ({ onDone }) => {
  const [, addLesson] = useCreateLessonMutation()
  const onSubmit = async (values: LessonInput) => {
    await addLesson({ data: serializeLesson(values) })
    onDone()
  }

  return <LessonForm defaultValues={{}} onSubmit={onSubmit} />
}
