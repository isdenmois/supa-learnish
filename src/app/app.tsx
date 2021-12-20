import { FC } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'urql'

import { Container } from '@mui/material'
import { Outlet, ReactLocation, Router } from 'react-location'
import { client } from 'shared/api'
import { routes } from './routes'

const theme = createTheme()
const location = new ReactLocation()

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider value={client}>
        <Router location={location} routes={routes}>
          <Container component='main' maxWidth='xs'>
            <Outlet />
          </Container>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}
