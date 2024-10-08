import React, { useState } from 'react'
import './Porquinho.css'

function Porquinho() {

    const [resultado, setResultado] = useState()

    function ContarMoedas(){

        //Declarar variáveis
        let totalReais, valorTroco
        let valorProduto = Number(prompt('Digite o valor do produto que deseja comprar (R$):'))
        let umReal = Number(prompt('Quantas moedas de 1 real?'))
        let cinquentaCentavos = Number(prompt('Quantas moedas de 50 centavos?'))
        let vinteCincoCentavos = Number(prompt('Quantas moedas de 25 centavos?'))
        let dezCentavos = Number(prompt('Quantas moedas de 10 centavos?'))
        let cincoCentavos = Number(prompt('Quantas moedas de 5 centavos?'))

        //Cálculos
        totalReais = ((umReal * 100) + (cinquentaCentavos * 50) + (vinteCincoCentavos * 25) + (dezCentavos * 10) + (cincoCentavos * 5)) / 100
        valorTroco = totalReais - valorProduto

        //Saída de dados
        if(totalReais >= valorProduto){
            setResultado(`Você pode comprar o produto! Sobram R$${valorTroco}.`)
        }
        else{
            valorTroco = valorTroco * -1
            setResultado(`Você não pode comprar o produto :<. Faltam R$${valorTroco}.`)
        }

    }
  return (
    <div className='PorquinhoContainer'>
        <h2>🐖</h2>
        <button onClick={ContarMoedas}>Contar moedas</button>

        <div>
            {resultado}
        </div>
      
    </div>
  )
}

export default Porquinho
