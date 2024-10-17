import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import './Pares.css'

function Pares() {
    const[resultado, setResultado] = useState(false)
    const[inptNumeroUm, setInptNumeroUm] = useState('')
    const[inptNumeroDois, setInptNumeroDois] = useState('')
    const[cont, setCont] = useState(0)

    function LerPares(){
      let maiorNum = 0, menorNum = 0
      let numUm = Number(inptNumeroUm), numDois = Number(inptNumeroDois)
      let numeroSobra

      if(numUm > maiorNum){
        maiorNum = numUm
      }else if(numDois > maiorNum){
        maiorNum = numDois
      }

      if(numUm < menorNum){
        menorNum = numUm
      }else if(numDois < menorNum){
        menorNum = numDois
      }

      numeroSobra = maiorNum - menorNum
    }

  return (
    <div>
        <Navbar />
        <div className="container-pares">
            <h1>7.13 e 7.14</h1>

            <div className="container-inpt">
              <p>Número 1</p>
              <input type="number"
              value={inptNumeroUm}
              onChange={ (e) => setInptNumeroUm(e.target.value) } />
            </div>
            
            <div className="container-inpt">
              <p>Número 2</p>
              <input type="number"
              value={inptNumeroDois}
              onChange={ (e) => setInptNumeroDois(e.target.value) } />
            </div>

            <button onClick={LerPares}>Ler</button>
            <button onClick={ () => setResultado(true) }>RESULTADO</button>

            {resultado && <p>z</p>}
        </div>
    </div>
  )
}

export default Pares