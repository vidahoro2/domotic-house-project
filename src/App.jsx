import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {LoginUserPage} from './pages/LoginUserPage'
import { LandingPage } from './pages/LandingPage'


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <h1>HOLA</h1>
      <LoginUserPage></LoginUserPage>
      <LandingPage/>
    </>
  )
}

export default App
