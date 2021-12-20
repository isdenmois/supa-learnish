import { useMutation } from 'urql'
import { Lesson, MutationCreateLessonArgs } from '../types'
import { lessonFragment } from './lesson-fragment'

const AddLessonMutation = `#graphql
  mutation AddLesson($data: LessonInput!) {
    createLesson(data: $data) {
      _id
      ...LessonFragment
    }
  }

  ${lessonFragment}
`

export const useCreateLessonMutation = () => useMutation<Lesson, MutationCreateLessonArgs>(AddLessonMutation)
