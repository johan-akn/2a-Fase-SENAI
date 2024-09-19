import React from 'react'
import { useState } from 'react'
import './ManoJuca.css'

function ManoJuca() {
    const [resultado, setResultado] = useState()
    const [inptDias, setInptDias] = useState()

    let valorDias, valorBruto, valorFinal
    let valorMulta = 150
    let descontoUm = 0.1, descontoDois = 0.15, descontoTotal
    let diariaUm = 100, diariaDois = 90, diariaTres = 80

    function CalcValor(){
        if(inptDias > 0 && inptDias <= 5){
            valorDias = inptDias * diariaUm
        }
        else if(inptDias > 5 && inptDias <= 10){
            valorDias = inptDias * diariaDois
        }
        else if(inptDias > 11){
            valorDias = inptDias * diariaTres
        }
        else{
            setResultado('Número inválido!')
            exit(0)
        }

        //Cálculos
        valorBruto = valorDias + valorMulta
        descontoTotal = descontoUm + descontoDois
        valorFinal = valorBruto - (valorBruto * descontoTotal)

        setResultado(`Mano Juca gastou R$${valorFinal} nesse(s) ${inptDias} dia(s).`)
    }

  return (
    <div>
      <h2>Mano Juca de férias...</h2>

      <p>Digite quantos dias Mano Juca ficou no albergue:</p>
      <input type="number"
       className='inptDias'
       value={inptDias}
       onChange={(event) => {setInptDias(event.target.value)}}
        />

      <div>
        <button onClick={CalcValor}>Calcular Valor</button>
      </div>
      {resultado}
    </div>
  )
}

export default ManoJuca
