import React from 'react'
import { useState } from 'react'
import ValorErro from '../components/ValorErro'
import ValorOk from '../components/ValorOk'

function Carrinho() {
    const [resultado, setResultado] = useState()
    const [inptValor, setInptValor] = useState()
    const [inptCarteira, setInptCarteira] = useState()

    function VerificarValor(){
        if(inptCarteira >= inptValor){
            setResultado(<ValorOk />)
        }
        else{
            setResultado(<ValorErro />)
        }
    }

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <div className="container-input">
      <input type="number" placeholder='Valor do produto'
      value={inptValor}
      onChange={ (event) => {setInptValor(event.target.value)}}
      />

      <input type="number" placeholder='Valor da carteira'
      value={inptCarteira}
      onChange={ (event) => {setInptCarteira(event.target.value)}}
      />

    <div>
        <button onClick={VerificarValor}>Verificar</button>
    </div>
      {resultado}

    </div>
    </div>
  )
}

export default Carrinho
