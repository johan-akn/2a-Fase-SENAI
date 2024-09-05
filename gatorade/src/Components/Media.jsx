import { useState } from "react"
import './Media.css'

function Media() {
    const [resultado, setResultado] = useState()

    function CalcularMedia(){
        let numUm = Number(prompt('Digite o número 1:'))
        let numDois = Number(prompt('Digite o número 2'))
        let media = (numUm + numDois) / 2
        setResultado(media)
    }

  return (
    <div className="MediaContainer">
        <h2>Exercício para calcular média de dois números</h2>
        <button onClick={CalcularMedia}>Calcular</button>

        <div>
            Média: {resultado}
        </div>
    </div>   
  )
}

export default Media
