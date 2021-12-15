import { FC } from 'react'
import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'
import { Box, Button, CircularProgress, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { useQuery } from 'urql'
import { Query } from 'shared/api'

const LessonsQuery = `#graphql
  query {
    lessons {
      data {
        _id
        description
        link
      }
    }
  }
`

const $count = atom(0)

const inc = () => $count.set($count.get() + 1)
const dec = () => {
  const prev = $count.get()
  if (prev > 0) {
    $count.set(prev - 1)
  }
}

export const HomePage: FC = () => {
  const count = useStore($count)
  const [{ data, fetching }] = useQuery<Query>({
    query: LessonsQuery,
  })

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography component='h1' variant='h5'>
        Count: {count}
      </Typography>

      <Box display='flex' gap='16px' mt='16px'>
        <Button onClick={inc} variant='contained'>
          Increment
        </Button>
        <Button onClick={dec} variant='contained'>
          Decrement
        </Button>
      </Box>

      {fetching && <CircularProgress />}

      {data?.lessons.data && (
        <List>
          {data.lessons.data.map(lesson => (
            <ListItem key={lesson._id} disablePadding>
              <ListItemButton>
                <ListItemText primary={lesson.description} secondary={lesson.link} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}
