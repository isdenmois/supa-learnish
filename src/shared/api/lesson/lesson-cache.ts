import { Cache } from '@urql/exchange-graphcache'
import { Mutation, Query } from '../types'

const LessonList = `#graphql
  {
    lessons {
      data {
        _id
      }
    }
  }
`

export const lessonCacheExchange = {
  createLesson(result: Mutation, _: any, cache: Cache) {
    cache.updateQuery({ query: LessonList }, (data: Query | null) => {
      data?.lessons.data.push(result.createLesson)

      return data
    })
  },
}
