import { FC } from 'react'
import { useController } from 'react-hook-form'
import { MenuItem } from '@mui/material'

import { useLessonsQuery } from 'shared/api'
import { Select } from 'shared/ui'
import { LessonForm } from './lesson-form'

export const LessonSelect: FC = () => {
  const [{ data }] = useLessonsQuery()
  const { field } = useController({ name: 'lesson' })

  const selected = field.value?.connect || 'create'
  const onChange = (value: string) => {
    if (value === 'create') {
      field.onChange({ create: {} })
    } else {
      field.onChange({ connect: value })
    }
  }

  const lessons = data?.lessons.data || []

  return (
    <>
      <Select label='Lesson' value={selected} onChange={onChange}>
        <MenuItem value='create'>Create a new lesson</MenuItem>

        {lessons.map(lesson => (
          <MenuItem key={lesson._id} value={lesson._id}>
            {lesson.description}
          </MenuItem>
        ))}
      </Select>

      {selected === 'create' && <LessonForm />}
    </>
  )
}
