import React from 'react'
import { useState } from 'react'
import './Troco.css'

function Troco() {
    const [resultado, setResultado] = useState()
    const [inptValor, setInptValor] = useState()

    const [nota100, setNota100] = useState()
    const [nota50, setNota50] = useState()
    const [nota20, setNota20] = useState()
    const [nota10, setNota10] = useState()
    const [nota5, setNota5] = useState()
    const [nota2, setNota2] = useState()
    const [moeda1, setMoeda1] = useState()

    function CalcularNotas(){
        // let 
        if(inptValor > 0){
            
        }
    }
  return (
    <div>
      <h2>Calcular troco</h2>

      <div className="container-troco">
        <p>Valor (R$):</p>
        <input type="number"
         value={inptValor}
         onChange ={ (event) => {setInptValor(event.target.value)}}/>
      </div>

      <button className='botaoCalc' >Calcular</button>

      <div className="resultado-troco">
        {resultado}
      </div>

      {nota10 && }
    </div>
  )
}

export default Troco
