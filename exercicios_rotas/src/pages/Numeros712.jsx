import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import './Numeros712.css'

function Numeros712() {
    const[inptNumero, setInptNumero] = useState('')
    const[contagem, setContagem] = useState('')
    const[resultado, setResultado] = useState(false)


    function LerNumero(){
        if(inptNumero > 100 && inptNumero < 200){
            setContagem(contagem + `${inptNumero}, `)
        }
    }
  return (
    <div>
        <Navbar />
        <div className='container-numeros'>
            <h1>Exercícios 7.12</h1>
            <input type="number"
            value={inptNumero}
            onChange={ (e) => setInptNumero(e.target.value) } />

            {inptNumero}

            <div>
                <button onClick={LerNumero}>Ler</button>
            </div>

            <button onClick={() => {
                if(inptNumero > 100 && inptNumero < 200){
                    setResultado(true)
                } }
            }>RESULTADO</button>

            <div>
                {resultado && <p>Números na faixa entre 100 e 200: {contagem} </p> }
            </div>
        </div>
    </div>
  )
}

export default Numeros712