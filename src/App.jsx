import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'

import Sale from './pages/Sale'
import SinglePage from './pages/SinglePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer/Footer'
import Basket from './pages/Basket'


const App = () => {
  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/product/:id' element={<SinglePage />}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/basket' element={<Basket/>} />
      </Routes>

      
    </>
  )
}

export default App
