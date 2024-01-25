import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './components/styled/GlobalStyled.js'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme , darkTheme} from './theme/theme.js'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


      <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
    <App />
    </ThemeProvider>

    
    
  </React.StrictMode>,
)
