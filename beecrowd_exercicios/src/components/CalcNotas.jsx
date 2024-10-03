import React, { useState } from 'react'
import './Troco.css'

function CalcNotas() {
    const [inptValor, setInptValor] = useState(0)

    const [nota100, setNota100] = useState(false)
    const [nota50, setNota50] = useState(false)
    const [nota20, setNota20] = useState(false)
    const [nota10, setNota10] = useState(false)
    const [nota5, setNota5] = useState(false)
    const [nota2, setNota2] = useState(false)
    const [moeda1, setMoeda1] = useState(false)
  
    const [qtd100, setQtd100] = useState(0)
    const [qtd50, setQtd50] = useState(0)
    const [qtd20, setQtd20] = useState(0)
    const [qtd10, setQtd10] = useState(0)
    const [qtd5, setQtd5] = useState(0)
    const [qtd2, setQtd2] = useState(0)
    const [qtd1, setQtd1] = useState(0)
  
    let valorAtual
  
    function CalcularNotas(){
      valorAtual = Number(inptValor)
      LimparResultado()
  
      if(inptValor > 0){
  
        if(valorAtual >= 100){
          setNota100(true)
          setQtd100(Math.floor(valorAtual / 100))
          valorAtual %= 100
        }
  
         if(valorAtual >= 50){
          setNota50(true)
          setQtd50(Math.floor(valorAtual / 50))
          valorAtual %= 50
        }
  
         if(valorAtual >= 20){
          setNota20(true)
          setQtd20(Math.floor(valorAtual / 20))
          valorAtual %= 20
        }
  
         if(valorAtual >= 10){
          setNota10(true)
          setQtd10(Math.floor(valorAtual / 10))
          valorAtual %= 10
        }
  
         if(valorAtual >= 5){
          setNota5(true)
          setQtd5(Math.floor(valorAtual / 5))
          valorAtual %= 5
        }
  
         if(valorAtual >= 2){
          setNota2(true)
          setQtd2(Math.floor(valorAtual / 2))
          valorAtual %= 2
        }
  
         if(valorAtual >= 1){
          setMoeda1(true)
          setQtd1(Math.floor(valorAtual / 1))
          valorAtual %= 1
        }}
    }
  
    function LimparResultado(){
        setNota100(false)
        setNota50(false)
        setNota20(false)
        setNota10(false)
        setNota5(false)
        setNota2(false)
        setMoeda1(false)
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
            {nota100 && `${qtd100} notas de R$100.`}
        </div>

        <div classname='resultado'>
            {nota50 && `${qtd50} notas de R$50.`}
        </div>

        <div classname='resultado'>
            {nota20 && `${qtd20} notas de R$20.`}
        </div>

        <div classname='resultado'>
            {nota10 && `${qtd10} notas de R$10.`}
        </div>

        <div classname='resultado'>
            {nota5 && `${qtd5} notas de R$5.`}
        </div>

        <div classname='resultado'>
            {nota2 && `${qtd2} notas de R$2.`}
        </div>

        <div classname='resultado'>
            {moeda1 && `${qtd1} moedas de R$1.`}  
        </div>
     </div>
    </div>
  )
}

export default CalcNotas
