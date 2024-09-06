import React from 'react'
import { useState } from 'react'
import './AlfabetoNotas.css'

function AlfabetoNotas() {

    const [resultado, setResultado] = useState()

    function CalcNotas(){
        let notaUm = Number(prompt('Digite a primeira nota'))
        let notaDois = Number(prompt('Digite a segunda nota'))
        let mediaNota = (notaUm + notaDois) / 2
        let notaConceito

        switch(true){

            case mediaNota <= 10 && mediaNota >= 9:
                notaConceito = 'A'
                break;

            case mediaNota < 9 && mediaNota >= 7.5:
                notaConceito = 'B'
                break;

            case mediaNota < 7.5 && mediaNota >= 6:
                notaConceito = 'C'
                break;

            case mediaNota < 6 && mediaNota >= 4:
                notaConceito = 'D'
                break;

            case mediaNota < 4 && mediaNota >= 0:
                notaConceito = 'E'
                break;

            default:
                setResultado ('Notas inválidas!')
                exit(0)

            }
            
        setResultado (`Nota um: ${notaUm} Nota dois: ${notaDois} Média: ${mediaNota} Conceito atingido: ${notaConceito}`)

    }

  return (
    <div className='NotasContainer'>
        <h2>Notas com letras</h2>
        <button onClick={CalcNotas}>Descobrir qual sua letra :o</button>

        <div>
            {resultado}
        </div>
      
    </div>
  )
}

export default AlfabetoNotas
