import React from 'react'
import { useState } from 'react'
import './Bonus.css'

function Bonus() {
    const [resultado, setResultado] = useState()
    const [inptSalario, setInptSalario] = useState()
    const [inptVendas, setInptVendas] = useState()
    const [inptNome, setInptNome] = useState()

    function CalcBonus(){
        let salarioFinal, salarioBonus
        if(inptSalario > 0 && inptVendas > 0){
            salarioBonus = (Number(inptVendas) * 0.15)
            salarioFinal = Number(inptSalario) + salarioBonus
            setResultado(`${inptNome} receberá um bônus de R$${salarioBonus}. Salário total: R$${salarioFinal}`)
        }
        else{
            setResultado(`Um dos campos é menor que R$0!`)
        }
    }

  return (
    <div>
      <h2>Bônus no Salário</h2>

      <div className='bonus-container'>
        <p>Nome:</p>
        <input type="text"
        value={inptNome}
        onChange ={ (event) => {setInptNome(event.target.value)}} />

        <p>Valor do salário (R$)</p>
        <input type="number"
        value={inptSalario}
        onChange ={ (event) => {setInptSalario(event.target.value)}} />

        <p>Valor total de vendas (R$)</p>
        <input type="number"
        value={inptVendas}
        onChange ={ (event) => {setInptVendas(event.target.value)}} />
      </div>

      <button onClick={CalcBonus} className='calc-bonus'>Calcular bônus</button>
      
      <div className='resultado-bonus'>
         {resultado}
      </div>
    </div>
  )
}

export default Bonus
