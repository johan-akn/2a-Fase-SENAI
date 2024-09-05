import React from 'react'
import { useState } from 'react'
import './PositivoPar.css'

function PositivoPar() {

    const [resultado, setResultado] = useState()

    function VerificarNumero(){
        
        let numDigitado = Number(prompt('Digite um número:'))

        if(numDigitado % 2 == 0 && numDigitado > 0){
            setResultado (`O número ${numDigitado} é par e positivo!`)
        }
        else{
            setResultado (`O número ${numDigitado} não é par e positivo :<`)
        }
    }

    
        
    

  return (
    <div className='Container'>

      <h2>Exercício para ver se o número é positivo e par ao mesmo tempo</h2>
      <button onClick={VerificarNumero}>Ler Número</button>

      <div>
        {resultado}
      </div>

    </div>
  )
}

export default PositivoPar
