import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'
import Cont from '../components/Cont.jsx'
import Tasks from '../components/Tasks.jsx'

createRoot(document.getElementById('root')).render(
    <MyApp />
  ,
)
