import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'

import Sale from './pages/Sale'
import SinglePage from './pages/SinglePage'


const App = () => {
  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/product/:id' element={<SinglePage />}/>
      </Routes>
    </>
  )
}

export default App
