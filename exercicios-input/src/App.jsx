import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NumSecreto from './pages/NumSecreto'
import Semana from './pages/Semana'

function App() {
  
  const[pagina, setPagina] = useState(<Home />)

  return (
    <>
    <nav className="navbar">
      <button onClick={() => {setPagina(<Home />)}}>Home</button>
      <button onClick={() => {setPagina(<NumSecreto />)}}>Número Secreto</button>
      <button onClick={() => {setPagina(<Semana />)}}>Dias da Semana</button>

    </nav>
    {pagina}
    </>
  )
}

export default App
