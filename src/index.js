import { createRoot } from 'react-dom/client'
import './styles.css'
import { Suspense } from 'react'
import { App } from './App'

createRoot(document.getElementById('root')).render(<Suspense fallback={null}>
    <App />
  </Suspense>)
