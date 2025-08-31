import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Navegador from './Navegacion'
import Home from './Home'
import Footer from './Close'
import Comprar from './Comprar'
import Alquilar from './Alquilar-casa'
import Reservas from './Reservas'



function App() {
  return(
    <>
<Navegador/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/Comprar" element={<Comprar/>}/>
  <Route path= "/Alquilar" element={<Alquilar/>}/>
  <Route path= "/Reservas" element={<Reservas/>}/>
</Routes>

<Footer
        titulo="Clínica Dentalmall"
        phone="Phone:+34 636 696 791"
        email="alexmartinezlacarcel@gmail.com"
        address="📍 O’Connell Street, Dublin, Irlanda"
        copyright="© 2025 Clínica Dentalmall"
      />


</>
  )

}

export default App
