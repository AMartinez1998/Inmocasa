import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Navegador from './Navegacion'

function App() {
  return(
    <>
<Navegador/>
<Routes>
  <Route path="/" element={<h1>hola</h1>}   />
  <Route path="/Comprar" element={<h1>adios</h1>}   />
  <Route path= "/Alquilar" element={<h1>puede ser</h1>}/>
</Routes>



</>
  )

}

export default App
