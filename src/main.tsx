import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  RouterProvider,
  Route
} from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import router from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
