import { FC } from 'react'
import { Card, CardHeader, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import { Lesson } from 'shared/api'

interface Props {
  lesson: Lesson
  onEdit(): void
}

export const LessonCard: FC<Props> = ({ lesson, onEdit }) => {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label='settings' onClick={onEdit}>
            <EditIcon />
          </IconButton>
        }
        title={lesson.description}
      />
    </Card>
  )
}
