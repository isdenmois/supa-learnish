import { FC } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { routes } from './routes'
import { Outlet, ReactLocation, Router } from 'react-location'

const theme = createTheme()
const location = new ReactLocation()

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router location={location} routes={routes}>
        <Container component='main' maxWidth='xs'>
          <Outlet />
        </Container>
      </Router>
    </ThemeProvider>
  )
}
