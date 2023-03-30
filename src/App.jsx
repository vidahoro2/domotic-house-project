import { useState } from 'react'
import './App.css'
import {LoginUserPage} from './pages/LoginUserPage'
import { LandingPage } from './pages/LandingPage'


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <LoginUserPage/>
      <LandingPage/>
    </>
  )
}

export default App
