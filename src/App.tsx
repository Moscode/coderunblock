import { ThemeProvider } from '@mui/material'
import { AuthUserProvider } from './firebase/auth'
import LandingPage from './pages/LandingPage'
import { theme } from './Theme'

import {
  createBrowserRouter,
} from 'react-router-dom'
import SignupPage from './pages/SignupPage'


function App() {
  return (
    <AuthUserProvider>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </AuthUserProvider>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'signup',
    element: <SignupPage />
  }
])


export default router
