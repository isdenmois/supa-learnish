import { useQuery } from 'urql'

import { Query } from '../types'
import { weekLessonFragment } from './week-lesson-fragment'

const WeekLessonsQuery = `#graphql
  query {
    weekLessons {
      data {
        _id
        ...WeekLessonFragment
      }
    }
  }
  ${weekLessonFragment}
`

export const useWeekLessonsQuery = () => useQuery<Query>({ query: weekLessonFragment })
