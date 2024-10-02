import React from 'react'
import { useState } from 'react'
import './DDD.css'

function DDD() {
    const [inptDDD, setInptDDD] = useState()
    const [resultado, setResultado] = useState()

    function LerDDD(){

        switch(Number(inptDDD)){
            case 11:
                setResultado('São Paulo')
                break;

            case 19:
                setResultado('Campinas')
                break;

            case 21:
                setResultado('Rio de Janeiro')
                break;

            case 27:
                setResultado('Vitória')
                break;

            case 31:
                setResultado('Belo Horizonte')
                break;

            case 32:
                setResultado('Juíz de Fora')
                break;
            

            case 61:
                setResultado('Brasília')
                break;

            case 71:
                setResultado('Salvador')
                break;

            default:
                setResultado('DDD não cadastrado')
            
        }
    }

  return (
    <div>
      <img className='lista-ddd' src="/images/ddd.webp" alt="lista_ddd" />

      <div className='ddd-container'>
        <p>Insira um DDD:</p>
        <input className='input-ddd' type="number"
        value={inptDDD}
        onChange ={ (event) => (setInptDDD(event.target.value))}
         />
      </div>

        <button onClick={LerDDD} className='ddd-button'>Processar</button>
      
      <div className='resultado-ddd'>
        {resultado}
      </div>
    </div>
  )
}

export default DDD
