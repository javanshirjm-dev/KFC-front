import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./i18n";
import App from './App.tsx'
import UseQueryProvider from './Provider/UseQueryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UseQueryProvider>
      <App />
    </UseQueryProvider>
  </StrictMode>,
)
