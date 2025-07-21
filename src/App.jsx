import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import UseStatePage from './pages/UseStatePage'
import LoginForm from './LoginForm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/useState' element={<UseStatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App