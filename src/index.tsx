import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { AuthProvider } from './contexts/AuthProvider'
import { RouterProvider } from './Router'

const container = document.getElementById('app')
if (!container) {
  throw new Error('Root container with id "app" not found!')
}

const root = createRoot(container)
const app = (
  <AuthProvider>
    <RouterProvider>
      <App />
    </RouterProvider>
  </AuthProvider>
)
root.render(app)
