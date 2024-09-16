import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NumSecreto from './pages/NumSecreto'
import Semana from './pages/Semana'
import NumPar from './pages/NumPar'
import Calculadora from './pages/Calculadora'
import Senha from './pages/Senha'
import Notas from './pages/Notas'
import Maior from './pages/Maior'
import Segredo from './pages/Segredo'
import Carrinho from './pages/Carrinho'

function App() {
  
  const[pagina, setPagina] = useState(<Home />)

  return (
    <>
    <nav className="navbar">
      <button onClick={() => {setPagina(<Home />)}}>Home</button>
      <button onClick={() => {setPagina(<NumSecreto />)}}>Número Secreto</button>
      <button onClick={() => {setPagina(<Semana />)}}>Dias da Semana</button>
      <button onClick={() => {setPagina(<NumPar />)}}>Número Par</button>
      <button onClick={() => {setPagina(<Calculadora />)}}>Calculadora</button>
      <button onClick={() => {setPagina(<Senha />)}}>Senha</button>
      <button onClick={() => {setPagina(<Notas />)}}>Notas</button>
      <button onClick={() => {setPagina(<Maior />)}}>Maior número</button>
      <button onClick={() => {setPagina(<Segredo />)}}>Segredo</button>
      <button onClick={() => {setPagina(<Carrinho />)}}>Carrinho</button>


    </nav>
    {pagina}
    </>
  )
}

export default App
