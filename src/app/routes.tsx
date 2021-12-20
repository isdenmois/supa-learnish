import { Route } from 'react-location'

import { HomePage } from 'pages/home'
import { LessonListPage } from 'pages/lesson-list'

export const routes: Route[] = [
  { path: '/', element: <HomePage /> },
  { path: '/lesson-list', element: <LessonListPage /> },
]
