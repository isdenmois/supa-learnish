import { pick } from 'rambdax'
import { LessonInput } from 'shared/api'

type LessonSerializer = (data: any) => LessonInput

export const serializeLesson = pick(['type', 'description', 'link', 'note']) as LessonSerializer
