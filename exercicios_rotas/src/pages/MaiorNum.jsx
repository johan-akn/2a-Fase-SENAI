import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import './MaiorNum.css'

function MaiorNum() {
    const [maiorNum, setMaiorNum] = useState(0)
    const[inptNumero, setInptNumero] = useState('')
    const [numDigitado, setNumDigitado] = useState(0)

    let numeroDigitado
    // function LerNumeros(){
    //     do{
    //        setNumDigitado(prompt(`${maiorNum} Digite qualquer número inteiro positivo:`))

    //        if(numDigitado > maiorNum){
    //             setMaiorNum(numeroDigitado)
    //        }

    //     }while(numDigitado != -1)
    // }
    function LerNum(){
        if(inptNumero > maiorNum){
            setMaiorNum(inptNumero)
        }
    }
  return (
    <div>
        <Navbar />
        <div className="container-maior">
            <h1>7.15</h1>
            <h3>Ler uma quantidade indeterminada de números inteiros positivos e identificar qual foi o maior número digitado.</h3>
            <h4>Digite -1 para encerrar</h4>

            <input type="number"
            value={inptNumero}
            onChange={ (e) => setInptNumero(e.target.value) } />

            <button onClick={LerNum}>Ler número</button>

            {/* <button onClick={LerNumeros}>Digitar números</button> */}
            {/* <p>Maior número: {maiorNum}</p> */}
            {inptNumero == -1 && <p> Maior número: {maiorNum} </p>}
        </div>
    </div>
  )
}

export default MaiorNum