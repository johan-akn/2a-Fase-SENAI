import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import './Pares.css'

function Pares() {
    const{resultado, setResultado} = useState(false)
    const{inptNumeroUm, setInptNumeroUm} = useState('')
    const{inptNumeroDois, setInptNumeroDois} = useState('')

  return (
    <div>
        <Navbar />
        <div className="container-pares">
            <h1>7.13 e 7.14</h1>

            <input type="number"
            value={inptNumeroUm}
            onChange={ (e) => setInptNumeroUm(e.target.value) } />
            
            <input type="number"
            value={inptNumeroDois}
            onChange={ (e) => setInptNumeroDois(e.target.value) } />

            <button>Ler</button>
            <button onClick={ () => setResultado(true) }>RESULTADO</button>

            {resultado && <p>z</p>}
        </div>
    </div>
  )
}

export default Pares