import React, { useState } from 'react'

function NumPar() {
    const [inptPar, setInptPar] = useState()
    const [resultado, setResultado] = useState()

    function VerificarNumero(){
        if(inptPar % 2 == 0){
            setResultado(`${inptPar} é um número par.`)
        }
        else{
            setResultado(`${inptPar} é um número ímpar.`)
        }
    }

  return (
    <div>
      <h2>Verificar Número</h2>

      <input type="number"
      value={inptPar}
      onChange={ (event) => {setInptPar(event.target.value)}}
      />
    <div>
      <button onClick={VerificarNumero}>Verificar</button>
    </div>

    {resultado}
    </div>
  )
}

export default NumPar
