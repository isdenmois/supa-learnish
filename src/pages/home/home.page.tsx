import { FC } from 'react'

import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'
import { useNavigate } from 'react-location'

import { Box, Button, CircularProgress, Typography } from '@mui/material'

import { lessonFragment, useQuery, WeekLesson } from 'shared/api'
import { AddWeekLesson, EditWeekLesson } from 'entities/week-lesson'

const LessonsQuery = `#graphql
  query {
    weekLessons {
      data {
        _id
        duration
        weekday
        lesson {
          _id
          ...LessonFragment
        }
      }
    }
  }
  ${lessonFragment}
`

const $count = atom(0)

const inc = () => $count.set($count.get() + 1)
const dec = () => {
  const prev = $count.get()
  if (prev > 0) {
    $count.set(prev - 1)
  }
}

export const HomePage: FC = () => {
  const count = useStore($count)
  const [{ data, fetching }] = useQuery({
    query: LessonsQuery,
  })
  const navigate = useNavigate()

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography component='h1' variant='h5'>
        Count: {count}
      </Typography>

      <Box display='flex' gap='16px' mt='16px'>
        <Button onClick={inc} variant='contained'>
          Increment
        </Button>
        <Button onClick={dec} variant='contained'>
          Decrement
        </Button>
      </Box>

      <Box mt='16px'>
        <Button onClick={() => navigate({ to: '/lesson-list' })}>All lessons</Button>

        {fetching && <CircularProgress />}

        {data?.weekLessons.data && <WeekView weekLessons={data.weekLessons.data} />}
      </Box>
    </Box>
  )
}

const WeekView: FC<{ weekLessons: WeekLesson[] }> = ({ weekLessons }) => {
  const days: any[] = []

  for (let i = 0; i < 7; i++) {
    days.push(
      <DayColumn key={i} weekday={i} weekLessons={weekLessons.filter(weekLesson => weekLesson.weekday === i)} />,
    )
  }

  return (
    <Box display='flex' flexDirection='row' width='100vw' gap='32px'>
      {days}
    </Box>
  )
}

const WEEKDAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const DayColumn: FC<{ weekday: number; weekLessons: WeekLesson[] }> = ({ weekday, weekLessons }) => {
  return (
    <Box display='flex' flexDirection='column' flex={1} gap='16px'>
      <Typography variant='h5' textAlign='center'>
        {WEEKDAY_NAMES[weekday]}
      </Typography>

      {weekLessons.map(weekLesson => (
        <EditWeekLesson key={weekLesson._id} weekLesson={weekLesson} />
      ))}

      <AddWeekLesson weekday={weekday} />
    </Box>
  )
}
