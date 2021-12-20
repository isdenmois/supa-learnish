import { useQuery } from 'urql'

import { Query } from '../types'
import { lessonFragment } from './lesson-fragment'

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

export const useLessonsQuery = () => useQuery<Query>({ query: LessonsQuery })
