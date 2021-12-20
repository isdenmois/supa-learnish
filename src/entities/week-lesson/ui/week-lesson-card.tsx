import { FC } from 'react'
import { Card, CardHeader, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import styled from '@emotion/styled'

import { WeekLesson } from 'shared/api'

//#region styles
const HoverIconButton = styled(IconButton)`
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`
//#endregion

interface Props {
  weekLesson: WeekLesson
  onEdit(): void
}

export const WeekLessonCard: FC<Props> = ({ weekLesson, onEdit }) => {
  const title = `${weekLesson.lesson.description} (${weekLesson.duration} min)`

  return (
    <Card>
      <CardHeader
        title={title}
        action={
          <HoverIconButton aria-label='settings' onClick={onEdit}>
            <EditIcon />
          </HoverIconButton>
        }
      />
    </Card>
  )
}
