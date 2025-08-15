import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import Bolsas from './pages/Bolsas'
import Cajas from './pages/Cajas'


const App = () => {
  return (

    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/bolsas" element={<Bolsas />} />
          <Route path="/cajas" element={<Cajas />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
