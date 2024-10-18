import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import './Pares.css'

function Pares() {
    const[resultado, setResultado] = useState(false)
    const[inptNumeroUm, setInptNumeroUm] = useState('')
    const[inptNumeroDois, setInptNumeroDois] = useState('')
    const[listaPares, setListaPares] = useState('')

    let maiorNum, menorNum
    let numUm, numDois

    function LerPares(){
      
      numUm = Number(inptNumeroUm)
      numDois = Number(inptNumeroDois)
      maiorNum = Math.max(numUm, numDois)
      menorNum = Math.min(numUm, numDois)

      let pares = []
      let i

      for(i = menorNum + 1; i < maiorNum; i++){
        if(i % 2 == 0){
          pares.push(` ${i}`)
        }
      }
      setListaPares(pares)
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

            {resultado && <p>Números pares entre o menor e o maior número: {listaPares}</p>}
        </div>
    </div>
  )
}

export default Pares