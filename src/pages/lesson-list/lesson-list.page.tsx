import { FC, useMemo } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { sortByPath } from 'rambdax'

import { AddLessonCard, EditLessonCard } from 'entities/lesson'

import { Lesson, useLessonsQuery } from 'shared/api'

export const LessonListPage: FC = () => {
  const [{ data, fetching }] = useLessonsQuery()
  const lessons: Lesson[] = useMemo(() => sortByPath('description', data?.lessons.data || []), [data?.lessons.data])

  if (fetching) {
    return <CircularProgress />
  }

  return (
    <>
      <h1>Lessons editor</h1>

      <Box gap='16px' display='flex' flexDirection='column'>
        <AddLessonCard />

        {lessons.map(lesson => (
          <EditLessonCard key={lesson._id} lesson={lesson} />
        ))}
      </Box>
    </>
  )
}
