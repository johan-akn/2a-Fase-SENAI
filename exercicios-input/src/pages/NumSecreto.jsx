import React from 'react'
import { useState } from 'react'
import './NumSecreto.css'

function NumSecreto() {
    const [inptNumero, setInptNumero] = useState()
    const [randomNum, setRandomNum] = useState()
    const [resultado, setResultado] = useState()
    
    // let numSecreto = Math.floor(Math.random() * 10) + 1;
    // console.log(numSecreto)
    
    function LerNumero(){
        
        if(inptNumero == randomNum){
            setResultado(`Você descobriu! O número secreto era ${randomNum}.`)
        }
        else{
            setResultado(`Você errou!`)
        }
    }
    
    return (
        <div>
        <h1>Jogo de Adivinhação</h1>
        <h2>Descubra o número secreto! (1 a 10)</h2>

      <input type="number"
      value={inptNumero}
      onChange={ (event) => {setInptNumero(event.target.value)}}
      />

        <div>
          <button onClick={() => {setRandomNum = (Math.floor(Math.random() * 2) + 1)}}>Gerar Número</button>
        </div>
        
      <div>
        <button onClick={LerNumero}>Ler número</button>
      </div>

        {resultado}
    </div>
  )
}


export default NumSecreto
