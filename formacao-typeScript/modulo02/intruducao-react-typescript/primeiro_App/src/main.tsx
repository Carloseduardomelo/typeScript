import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styled.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle />
  </React.StrictMode>,
)