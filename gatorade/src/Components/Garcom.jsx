import React from 'react'
import { useState } from 'react'
import './Garcom.css'

function Garcom() {

  const [resultado, setResultado] = useState()

  function Calcular(){

    //Declarar variáveis
    let valorSalario, valorEmprestimo, numeroPrestacoes
    let mensagemErro = 'Nenhum dos valores pode ser 0 ou abaixo! Tente novamente.'
    let valorPrestacao, calcSalario
 
    //Entrada de dados
    valorSalario = Number(prompt('Digite o valor do salário:'))
    if(valorSalario <= 0){
      alert(mensagemErro)
      exit(0)
    }

    valorEmprestimo = Number(prompt('Digite o valor do empréstimo (R$):'))
    if(valorEmprestimo <= 0){
      alert(mensagemErro)
      exit(0)
    }

    numeroPrestacoes = Number(prompt('Digite o número de prestações:'))
    if(numeroPrestacoes <= 0){
      alert(mensagemErro)
      exit(0)
    }

    //Cálculos
    valorPrestacao = valorEmprestimo / numeroPrestacoes
    calcSalario = valorSalario * 0.3

    if(calcSalario > valorPrestacao){
      setResultado ("Seu empréstimo foi aprovado!")
    }
    else if(calcSalario <= valorPrestacao){
      setResultado ("Seu empréstimo foi reprovado. O valor da prestação é maior que 30% do salário.")
    }

    
    //Saída de dados
  
  }

  return (
    <div className='Container'>
      <h2>Garçom etc</h2>
      <button onClick={Calcular}>Calcular</button>

      <div>
        {resultado}
      </div>

    </div>
  )
}

export default Garcom
