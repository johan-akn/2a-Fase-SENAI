import React from 'react'
import { useState } from 'react'

function Dogao() {
    const [resultado, setResultado] = useState()
    const [inptLanche, setInptLanche] = useState()
    const [inptQntd, setInptQntd] = useState()

    function CalcularValor(){
        let valor1 = 4, valor2 = 4.50, valor3 = 5, valor4 = 2, valor5= 1.50
        let valorFinal, nomeLanche

        switch (Number(inptLanche)) {
            case 1:
                valorFinal = valor1 * inptQntd
                nomeLanche = 'Cachorro Quente'
                break;

            case 2:
                valorFinal = valor2 * inptQntd
                nomeLanche = 'X-Salada'
                break;

            case 3:
                valorFinal = valor3 * inptQntd
                nomeLanche = 'X-Bacon'
                break;

            case 4:
                valorFinal = valor4 * inptQntd
                nomeLanche = 'Torrada simples'
                break;

            case 5:
                valorFinal = valor5 * inptQntd
                nomeLanche = 'Refrigerante'
                break;
        
            default:
                valorFinal = `ID inválido!`
        }
        setResultado(`Você pediu ${inptQntd} ${nomeLanche}. O valor final é de R$${valorFinal}.`)
    }

  return (
    <div>
      <img src="https://resources.beecrowd.com/gallery/images/problems/UOJ_1038_en.png" alt="" />

    <div>
        <p>ID do lanche:</p>
      <input type="number"
       className='inptDias'
       value={inptLanche}
       onChange={(event) => {setInptLanche(event.target.value)}}
       />
       </div>

       <div>
        <p>Quantidade:</p>

      <input type="number"
       className='inptDias'
       value={inptQntd}
       onChange={(event) => {setInptQntd(event.target.value)}}
       />
       </div>

       <button onClick={CalcularValor}>Calcular</button>
    <div>
        {resultado}
    </div>

    </div>
  )
}

export default Dogao
