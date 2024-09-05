import React from 'react'
import { useState } from 'react'
import './Contador.css'

function Exemplo() {

    const [resultado, setResultado] = useState(0)

    function aumentar(){
        setResultado(resultado + 1)
    }

    function diminuir(){
        setResultado(resultado - 1)
    }

    function aumentar2(){
        setResultado(resultado + 2)
    }

    function diminuir2(){
        setResultado(resultado - 2)
    }


  return (
    <div className='Contador-Container'>

        <h2>Exemplo de contador</h2>

      <button onClick={aumentar2}>+2</button>
      <button onClick={aumentar}>+1</button>
      {resultado}
      <button onClick={diminuir}>-1</button>
      <button onClick={diminuir2}>-2</button>

    </div>
  )
}

export default Exemplo
