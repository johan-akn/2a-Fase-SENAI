import './App.css'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Contato from './pages/Contato'
import { useState } from 'react'
import Render from './pages/Render'

function App() {
  const [pagina, setPagina] = useState (<Home />)

  return (
    <>
    <nav className='navbar'>
      <button onClick={() => {setPagina(<Home />)}}>Home</button>
      <button onClick={() => {setPagina(<Page1 />)}}>Segredo</button>
      <button onClick={() => {setPagina(<Contato />)}}>Contato</button>
      <button onClick={() => {setPagina(<Render />)}}>Render</button>
    </nav>
    
    {pagina}
 
    </>
  )
}

export default App
