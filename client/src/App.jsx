import { useState } from 'react'
import './App.css'
import {LoginUserPage} from './pages/LoginUserPage'
import { LandingPage } from './pages/LandingPage'
import { RegisterFormPage } from './pages/RegisterFormPage'
import { Services } from './pages/Services'
import {RoomSelection} from './pages/RoomSelection'
import {ModifyData} from './pages/ModifyData'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (  
    <>
      <Routes>
        <Route path='/' exaxt element={<LandingPage/>}/>
        <Route path='/login' exaxt element={<LoginUserPage/>}/>
        <Route path='/logup' exaxt element={<RegisterFormPage/>}/>
        <Route path='/services' exaxt element={<Services/>} />
        <Route path='room-selection' exaxt element={<RoomSelection/>}/>  
        <Route path='modify-data' exaxt element={<ModifyData/>}/>
      </Routes>
    </>
  )
}

export default App
