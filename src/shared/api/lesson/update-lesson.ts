import { useMutation } from 'urql'
import { Lesson, MutationUpdateLessonArgs } from '../types'
import { lessonFragment } from './lesson-fragment'

const UpdateLessonMutation = `#graphql
  mutation UpdateLesson($id: ID!, $data: LessonInput!) {
    updateLesson(id: $id, data: $data) {
      _id
      ...LessonFragment
    }
  }

  ${lessonFragment}
`

export const useUpdateLessonMutation = () => useMutation<Lesson, MutationUpdateLessonArgs>(UpdateLessonMutation)
