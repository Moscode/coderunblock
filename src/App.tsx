import { ThemeProvider } from '@mui/material'
import { AuthUserProvider } from './firebase/auth'
import LandingPage from './pages/LandingPage'
import { theme } from './Theme'

function App() {

  return (
    <AuthUserProvider>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </AuthUserProvider>
  )
}

export default App
