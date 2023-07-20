import { useState } from 'react'
import './App.css'
import {LoginUserPage} from './pages/LoginUserPage'
import { LandingPage } from './pages/LandingPage'
import { RegisterFormPage } from './pages/RegisterFormPage'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (  
    <>
      <Routes>
        <Route path='/' exaxt element={<LandingPage/>}/>
        <Route path='/login' exaxt element={<LoginUserPage/>}/>
        <Route path='/logup' exaxt element={<RegisterFormPage/>}/>
      </Routes>
    </>
  )
}

export default App
