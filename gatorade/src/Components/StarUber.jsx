import React from 'react'
import { useState } from 'react'
import './StarUber.css'

function StarUber() {

    const [resultado, setResultado] = useState()

   function CalcularTempo(){

        let velocidadeLuz = 300000
        let distanciaViagem = Number(prompt('Digite a distância que deseja percorrer (km):'))
        let tempoViagem = distanciaViagem / velocidadeLuz
        let unidadeMedida
        let minMinuto = 60, minHora = 60*60, minDia = 60*60*24, minMes = 60*60*24*30, minAno = 60*60*24*30*12

        switch(true){

            case tempoViagem > 0 && tempoViagem < 60:
                unidadeMedida = 'segundo(s)'
                break;

            case tempoViagem >= 60 && tempoViagem < minHora:
                tempoViagem = tempoViagem / 60
                unidadeMedida = 'minuto(s)'
                break;

            case tempoViagem >= minHora && tempoViagem < minDia:
                 tempoViagem = tempoViagem / (minHora)
                unidadeMedida = 'hora(s)'
                break;

            case tempoViagem >= minDia && tempoViagem < minMes:
                tempoViagem = tempoViagem / (minDia)
                unidadeMedida = 'dia(s)'
                break;

            case tempoViagem >= minMes && tempoViagem < minAno:
                tempoViagem = tempoViagem / (minMes)
                unidadeMedida = 'mês(es)'
                break;

            case tempoViagem >= minAno:
                tempoViagem = tempoViagem / (minAno)
                unidadeMedida = 'ano(s)'
                break;

            default:
                setResultado("Distância inválida!")
                exit(0)

        }

        setResultado (`Sua viagem StarUber durará ${tempoViagem.toFixed(4)} ${unidadeMedida}.`)

    }

  return (
    <div className='StarContainer'>
        <h2>StarUber</h2>
        <button onClick={CalcularTempo}>Calcular o tempo da viagem</button>

        <div>
            {resultado}
        </div>
      
    </div>
  )
}

export default StarUber
