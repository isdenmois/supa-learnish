import { useMutation } from 'urql'
import { WeekLesson, MutationUpdateWeekLessonArgs } from '../types'
import { weekLessonFragment } from './week-lesson-fragment'

const EditWeekLessonMutation = `#graphql
  mutation EditWeekLesson($id: ID!, $data: WeekLessonInput!) {
    updateWeekLesson(id: $id, data: $data) {
      _id
      ...WeekLessonFragment
    }
  }

  ${weekLessonFragment}
`

export const useEditWeekLessonMutation = () =>
  useMutation<WeekLesson, MutationUpdateWeekLessonArgs>(EditWeekLessonMutation)
