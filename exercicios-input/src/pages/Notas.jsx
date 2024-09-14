import React, { useState } from 'react'
import './Notas.css'

function Notas() {
    const [inptNota, setInptNota] = useState()
    const [resultado, setResultado] = useState()

    function LerNota(){
        switch(true){

            case Number(inptNota) <= 100 && Number(inptNota) >= 90:
                setResultado('Nota A')
                break;

            case Number(inptNota) < 90 && Number(inptNota) >= 75:
                setResultado('Nota B')
                break;

            case Number(inptNota) < 75 && Number(inptNota) >= 60:
                setResultado('Nota C')
                break;

            case Number(inptNota) < 60 && Number(inptNota) >= 40:
                setResultado('Nota D')
                break;

            case Number(inptNota) < 40 && Number(inptNota) >= 0:
                setResultado('Nota E')
                break;

            default:
                setResultado ('Notas inválidas!')
                exit(0)
        }
    }

  return (
    <div>
      <h2>Classificação de Notas</h2>

      <input type="number"
         placeholder='Digite sua nota (0 a 100)'
        value={inptNota}
        onChange={ (event) => {setInptNota(event.target.value)}}
      />

      <div>
        <button onClick={LerNota}>Ler Nota</button>
      </div>

      {resultado}
    </div>
  )
}

export default Notas
