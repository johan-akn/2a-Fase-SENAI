import React, { useState } from 'react'
import './Calculadora.css'

function Calculadora() {
    const [inptNumUm, setInptNumUm] = useState()
    const [inptNumDois, setInptNumDois] = useState()
    const [resultado, setResultado] = useState()

  return (
    <div>
      <h2>Calculadora Simples</h2>

      <div className="container-input">
      <input type="number"
      value={inptNumUm}
      onChange={ (event) => {setInptNumUm(event.target.value)}}
      />

      <input type="number"
      value={inptNumDois}
      onChange={ (event) => {setInptNumDois(event.target.value)}}
      />
    </div>

      <button onClick={() => setResultado(Number(inptNumUm) + Number(inptNumDois))}>+</button>
      <button onClick={() => setResultado(Number(inptNumUm) - Number(inptNumDois))}>-</button>
      <button onClick={() => setResultado(Number(inptNumUm) * Number(inptNumDois))}>*</button>
      <button onClick={() => setResultado(Number(inptNumUm) / Number(inptNumDois))}>/</button>
    <div>
      Resultado: {resultado}
    </div>
    </div>
  )

}

export default Calculadora
