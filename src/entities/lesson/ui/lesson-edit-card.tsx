import { FC, useState } from 'react'

import { Lesson } from 'shared/api'
import { LessonCard } from './lesson-card'
import { LessonEditForm } from './lesson-edit-form'

interface Props {
  lesson: Lesson
}

export const LessonEditCard: FC<Props> = ({ lesson }) => {
  const [edit, setEdit] = useState(false)

  if (edit) {
    return <LessonEditForm lesson={lesson} onDone={() => setEdit(false)} />
  }

  return <LessonCard lesson={lesson} onEdit={() => setEdit(true)} />
}
