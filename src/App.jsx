import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginUser } from './components/LoginUser';
import { LoginUserPage } from './pages/loginUserPage';


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <LoginUserPage/>

    </>
  

    
  )
}

export default App
