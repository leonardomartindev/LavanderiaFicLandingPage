import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme.jsx'
import Favicon from "react-favicon"
import LaundryPng from './assets/laundry.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Favicon url={LaundryPng} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
