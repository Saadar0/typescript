import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QuizInteractif from './components/QuizInteractif'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <QuizInteractif/>
 </StrictMode>,
)
