import { Cache } from '@urql/exchange-graphcache'
import { Mutation, Query, MutationCreateWeekLessonArgs } from '../types'

const WeekLessonList = `#graphql
  {
    lessons {
      data {
        _id
      }
    }
    weekLessons {
      data {
        _id
      }
    }
  }
`

export const weekLessonCacheExchange = {
  createWeekLesson(result: Mutation, args: MutationCreateWeekLessonArgs, cache: Cache) {
    cache.updateQuery({ query: WeekLessonList }, (data: Query | null) => {
      if (args.data.lesson?.create) {
        data?.lessons.data.push(result.createWeekLesson.lesson)
      }

      data?.weekLessons.data.push(result.createWeekLesson)

      return data
    })
  },
}
