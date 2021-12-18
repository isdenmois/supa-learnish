import { FC } from 'react'
import { Card, CardHeader } from '@mui/material'
import { WeekLesson } from 'shared/api'

interface Props {
  weekLesson: WeekLesson
}

export const WeekLessonCard: FC<Props> = ({ weekLesson }) => {
  const title = `${weekLesson.lesson.description} (${weekLesson.duration} min)`

  return (
    <Card>
      <CardHeader title={title} />
    </Card>
  )
}
