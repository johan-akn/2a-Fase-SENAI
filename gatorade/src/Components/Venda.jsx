import React from 'react'
import { useState } from 'react'
import './Venda.css'

function Venda() {

    const [resultado, setResultado] = useState()

    function BotaoVenda(){

        let valorProduto = Number(prompt('Digite o valor do produto (R$):'))
        let valorVenda, valorLucro

        if(valorProduto > 0 && valorProduto < 20){
            valorLucro = valorProduto * 0.45
            valorVenda = valorProduto + valorLucro
        }
        else if(valorProduto >= 20){
            valorLucro = valorProduto * 0.3
            valorVenda = valorProduto + valorLucro
        }
        else{
            setResultado (`Valor inválido!`)
            exit(0)
        }
        
        setResultado (`O valor de venda será de R$${valorVenda.toFixed(2)}.`)

    }

  return (
    <div className='VendaContainer'>
        <h2>Venda</h2>
        <button onClick={BotaoVenda}>Calcular valor de venda</button>
        
        <div>
            {resultado}
        </div>
        
      
    </div>
  )
}

export default Venda
