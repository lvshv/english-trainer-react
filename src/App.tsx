import React, { useRef, useState } from 'react'
import logo from './logo.svg'
import { exerciseData } from 'data/exercises.js'
import Header from 'layout/Header'
import Footer from 'layout/Footer'

import { Routes, Route, Link } from 'react-router-dom'
import ExercisePage from 'pages/ExercisePage'
import HomePage from 'pages/HomePage'
import produce from 'immer'
import './App.css'
import LoginPage from 'pages/Login'

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='exercise' element={<ExercisePage />}>
          <Route path=':exerciseId' element={<ExercisePage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
