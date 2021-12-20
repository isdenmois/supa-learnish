import { useMutation } from 'urql'
import { WeekLesson, MutationCreateWeekLessonArgs } from '../types'
import { weekLessonFragment } from './week-lesson-fragment'

const AddWeekLessonMutation = `#graphql
  mutation AddWeekLesson($data: WeekLessonInput!) {
    createWeekLesson(data: $data) {
      _id
      ...WeekLessonFragment
    }
  }

  ${weekLessonFragment}
`

export const useAddWeekLessonMutation = () =>
  useMutation<WeekLesson, MutationCreateWeekLessonArgs>(AddWeekLessonMutation)
