import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import './MaiorNum.css'

function MaiorNum() {
    const [maiorNum, setMaiorNum] = useState(0)
    const[inptNumero, setInptNumero] = useState('')

    function LerNum(){
        let numDigitado = Number(inptNumero)
        if(numDigitado > maiorNum){
            setMaiorNum(numDigitado)
        }
    }
  return (
    <div>
        <Navbar />
        <div className="container-maior">
            <h1>7.15</h1>
            <h3>Ler uma quantidade indeterminada de números inteiros positivos e identificar qual foi o maior número digitado.</h3>
            <h4>Digite -1 para encerrar</h4>

            <input type="text"
            value={inptNumero}
            onChange={ (e) => setInptNumero(e.target.value) } />

            <button onClick={LerNum}>Ler número</button>

            {inptNumero == -1 && <p> Maior número: {maiorNum} </p>}
        </div>
    </div>
  )
}

export default MaiorNum