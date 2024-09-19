import React from 'react'
import { useState } from 'react'
import Login from '../components/Login'
import PainelAdm from '../components/PainelAdm'
import ProdutosParaMaiores from '../components/ProdutosParaMaiores'
import UsuarioLogado from '../components/UsuarioLogado'
import './Render.css'

function Render() {
    const[adm, setAdm] = useState(true)
    const[idade, setIdade] = useState(0)
    const[usuario, setUsuario] = useState(false)
    const [podeAposentar, setPodeAposentar] = useState(false)

  return (
    <div>
      <h1>Renderizações condicionais</h1>

    <div className="container">
      <div className='render-container'>
        <button onClick={() => {setAdm(true)}}>aparece</button>
        <button onClick={() => {setAdm(false)}}>n aparece</button>
        { adm && <PainelAdm />}
      </div>

      <div className="render-container">
        <button onClick={() => {setIdade(idade -1)}}>-</button>
        {idade}
        <button onClick={() => {setIdade(idade +1)}}>+</button>
        {idade >= 18 && <ProdutosParaMaiores />}
      </div>

      <div className="render-container">
        <button onClick={() => {setUsuario(true)}}>Entrar</button>
        <button onClick={() => {setUsuario(false)}}>Sair</button>
        { usuario ? <UsuarioLogado/> : <Login />}
      </div>
    </div>

    </div>
  )
}

export default Render
