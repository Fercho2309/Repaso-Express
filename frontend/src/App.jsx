import { useState } from 'react'
import './index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Layout (LayoutAuth)
import LayoutAuth from '../Layout/LayoutAuth.jsx'

// pages (usuarios)
import Login  from './pages/Login.jsx'
import Registro from './pages/Usuario/Registro.jsx'
import OlvidePassword from './pages/Usuario/OlvidePassword.jsx'
import Confirmar from './pages/Usuario/Confirmar.jsx'

function App() {
  return (
  
  <Router>

    <Routes>

      {/* RUTAS PUBLICAS */}
      <Route path='/' element={<LayoutAuth />}>

        <Route index element={<Login />} />
        <Route path='registro' element={<Registro />} />
        <Route path='olvide-password' element={<OlvidePassword />} />
        <Route path='confirmar/:id' element={<Confirmar />} />

      </Route>

    </Routes>

  </Router>

)
}
export default App
