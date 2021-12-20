import { lessonFragment } from '../lesson'

export const weekLessonFragment = `#graphql
fragment WeekLessonFragment on WeekLesson {
  _id
  duration
  weekday
  lesson {
    _id
    ...LessonFragment
  }
}
${lessonFragment}
`
