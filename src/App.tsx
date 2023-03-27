import { ThemeProvider } from '@mui/material'
import LandingPage from './pages/LandingPage'
import { theme } from './Theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
