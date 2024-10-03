import React, { useState } from 'react';
import './Troco.css';

function Troco() {
  const [inptValor, setInptValor] = useState('')

  const [qtd100, setQtd100] = useState(0)
  const [qtd50, setQtd50] = useState(0)
  const [qtd20, setQtd20] = useState(0)
  const [qtd10, setQtd10] = useState(0)
  const [qtd5, setQtd5] = useState(0)
  const [qtd2, setQtd2] = useState(0)
  const [qtd1, setQtd1] = useState(0)

  let valorAtual;

  function CalcularNotas(){
    valorAtual = Number(inptValor)
    LimparResultado()

    if(inptValor > 0){

      if(valorAtual >= 100){
        setQtd100(Math.floor(valorAtual / 100))
        valorAtual %= 100
      }

      if(valorAtual >= 50){
        setQtd50(Math.floor(valorAtual / 50))
        valorAtual %= 50
      }

      if(valorAtual >= 20){
        setQtd20(Math.floor(valorAtual / 20))
        valorAtual %= 20
      }

      if(valorAtual >= 10){
        setQtd10(Math.floor(valorAtual / 10))
        valorAtual %= 10
      }

      if(valorAtual >= 5){
        setQtd5(Math.floor(valorAtual / 5))
        valorAtual %= 5
      }

      if(valorAtual >= 2){
        setQtd2(Math.floor(valorAtual / 2))
        valorAtual %= 2
      }

      if(valorAtual >= 1){
        setQtd1(Math.floor(valorAtual / 1))
        valorAtual %= 1
      }}
  }

  function LimparResultado(){
      setQtd100(0)
      setQtd50(0)
      setQtd20(0)
      setQtd10(0)
      setQtd5(0)
      setQtd2(0)
      setQtd1(0)
  }

  return (
    <div>
      <h2>Calcular troco</h2>

      <div className="container-troco">
        <p>Valor (R$):</p>
        <input type="number"
         value={inptValor}
         onChange ={ (event) => {setInptValor(event.target.value)}}/>
      </div>

      <button onClick={CalcularNotas} className='botaoCalc' >Calcular</button>

      <div className="resultado-troco">
        <div classname='resultado'>
          {qtd100 > 0 && `${qtd100} nota(s) de R$100.`}
        </div>

        <div classname='resultado'>
          {qtd50 > 0 && `${qtd50} nota(s) de R$50.`}
        </div>

        <div classname='resultado'>
          {qtd20 > 0 && `${qtd20} nota(s) de R$20.`}
        </div>

        <div classname='resultado'>
          {qtd10 > 0 && `${qtd10} nota(s) de R$10.`}
        </div>

        <div classname='resultado'>
          {qtd50 > 0 && `${qtd5} nota(s) de R$5.`}
        </div>

        <div classname='resultado'>
          {qtd2 > 0 && `${qtd2} nota(s) de R$2.`}
        </div>

        <div classname='resultado'>
          {qtd1 > 0 && `${qtd1} moeda(s) de R$1.`}  
        </div>

      </div>
    </div>
  )
}

export default Troco;