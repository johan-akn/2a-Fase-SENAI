import React, { useState } from 'react'
import './Maior.css'
function Maior() {
    const [resultado, setResultado] = useState()
    const [inptNumUm, setInptNumUm] = useState()
    const [inptNumDois, setInptNumDois] = useState()

    function LerMaior(){
        if(inptNumUm > inptNumDois){
            setResultado(`${inptNumUm} é maior que ${inptNumDois}.`)
        }
        else if(inptNumUm < inptNumDois){
            setResultado(`${inptNumDois} é maior que ${inptNumUm}.`)
        }
        else{
            setResultado(`Os números são iguais.`)
        }
    }
  return (
    <div>
      <h2>Maior número</h2>

      <input type="number" className='inpt-maior'
      value={inptNumUm}
      onChange={ (event) => {setInptNumUm(event.target.value)}}
      />

      <input type="number" className='inpt-maior'
      value={inptNumDois}
      onChange={ (event) => {setInptNumDois(event.target.value)}}
      />

    <div>
        <button onClick={LerMaior}>Verificar maior número</button>
    </div>
    {resultado}

    </div>
  )
}

export default Maior
