import { pick } from 'rambdax'
import { WeekLessonInput } from 'shared/api'

type WeekLessonSerializer = (data: any) => WeekLessonInput

export const serializeWeekLesson = pick(['duration', 'weekday', 'lesson']) as WeekLessonSerializer
