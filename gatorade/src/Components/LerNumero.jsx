import React from 'react'
import { useState } from 'react'
import './LerNumero.css'

function LerNumero() {

    const [resultado, setResultado] = useState()

    function VerificarNumero(){
        let numDigitado = Number(prompt('Digite um número:'))
   
        if(numDigitado > 0){
            setResultado (`${numDigitado} é um número positivo.`)
        }
        else if(numDigitado < 0){
            setResultado (`${numDigitado} é um número negativo`)
        }
        else{
            setResultado (`${numDigitado} é um número neutro.`)
        }
    }



  return (
    <div className='LerNumero-Container'>
        <h2>Exercício para ler número e verificar seu estado</h2>
        <button onClick={VerificarNumero}>Verificar Número</button>

        <div>
            {resultado}
        </div>
      
    </div>
  )
}

export default LerNumero
