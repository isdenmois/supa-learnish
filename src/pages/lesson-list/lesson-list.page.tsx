import { FC, useMemo } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { sortByPath } from 'rambdax'

import { AddLesson, LessonEditCard } from 'entities/lesson'

import { Lesson, lessonFragment, useQuery } from 'shared/api'

const LessonsQuery = `#graphql
  query Lessons {
    lessons {
      data {
        _id
        ...LessonFragment
      }
    }
  }

  ${lessonFragment}
`

export const LessonListPage: FC = () => {
  const [{ data, fetching }] = useQuery({ query: LessonsQuery })
  const lessons: Lesson[] = useMemo(() => sortByPath('description', data?.lessons.data || []), [data?.lessons.data])

  if (fetching) {
    return <CircularProgress />
  }

  return (
    <>
      <h1>Lessons editor</h1>

      <Box gap='16px' display='flex' flexDirection='column'>
        <AddLesson />

        {lessons.map(lesson => (
          <LessonEditCard key={lesson._id} lesson={lesson} />
        ))}
      </Box>
    </>
  )
}
