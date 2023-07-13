import { useState } from 'react'
import './App.css'
import {LoginUserPage} from './pages/LoginUserPage'
import { LandingPage } from './pages/LandingPage'
import { RegisterFormPage } from './pages/RegisterFormPage'
import ReactDOM from 'react-dom/client'


function App() {
  const [count, setCount] = useState(0)

  
  return (
    
      
    <>
        <LandingPage/>
        <h2>Holaa</h2>
    </>

  )
}

export default App
