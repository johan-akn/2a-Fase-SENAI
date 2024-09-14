import React, { useState } from 'react'

function Semana() {
    const [inptDia, setInptDia] = useState()
    const [resultado, setResultado] = useState()

    function MostrarDia(){
      switch (Number(inptDia)){

        case 1:
          setResultado('Domingo')
          break;

        case 2:
          setResultado('Segunda-feira')
          break;

        case 3:
          setResultado('Terça-feira')
          break;

        case 4:
          setResultado('Quarta-feira')
          break;

        case 5:
          setResultado('Quinta-feira')
          break;

        case 6:
          setResultado('Sexta-feira')
          break;

        case 7:
          setResultado('Sábado')
          break;

        default:
          setResultado('Número inválido')
      }
    }

  return (
    <div>
      <h2>Dias da Semana</h2>

    <div>
     <input type="number"
      placeholder='Digite um número de 1 a 7'
      value={inptDia}
      onChange={ (event) => {setInptDia(event.target.value)}}
      />
    </div> 

      <button onClick={MostrarDia}>Mostrar dia</button>

    <div>
      {resultado}
    </div>
    </div>
  )
}

export default Semana
