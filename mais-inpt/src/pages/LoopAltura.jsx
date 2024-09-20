import React from 'react'
import { useState } from 'react'

function LoopAltura() {
    const [resultado, setResultado] = useState('')


    function CalcAnos(){
        //Declarar variáveis
        let altValentina = 1.50, altEnzo = 1.40
        let crescValentina = 0.02, crescEnzo = 0.03
        let contAnos = 0

        //Cálculos
        while(altValentina >= altEnzo){

            altValentina += crescValentina
            altEnzo += crescEnzo
            contAnos++
        }
        //Saída de dados
        setResultado(`Enzo levou ${contAnos} anos para ser mais alto que Valentina.`)
    }

  return (
    <div>
      <h4>Valentina, a irmã do Mano Juca tem 1.50m e cresce 2 centímetros por ano, enquanto Enzo, o irmão mais novo, tem 1.40m e cresce 3 centímetros por ano.</h4>
      <p>Clique no botão e descubra quando Enzo será mais alto que Valentina.</p>
        <button onClick={CalcAnos}>Calcular</button>

    <div>
         {resultado} 
    </div>
    </div>
  )
}

export default LoopAltura
