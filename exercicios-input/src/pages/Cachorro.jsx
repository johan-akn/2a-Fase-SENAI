import React from 'react'
import { useState } from 'react'
import NaoPodeAposentar from '../components/NaoPodeAposentar'
import PodeAposentar from '../components/PodeAposentar'

function Cachorro() {
    const [resultado, setResultado] = useState()
    const [inptIdade, setInptIdade] = useState()
    const[naoPodeAposentar, setNaoPodeAposentar] = useState(false)
    const [podeAposentar, setPodeAposentar] = useState(false)

    function CalcIdade(){
        
        let idadeCachorro = Number(inptIdade)*7
        setResultado(`Seu cachorro tem ${idadeCachorro} anos.`)

        if(idadeCachorro >= 65){
            setPodeAposentar(true)
            setNaoPodeAposentar(false)
        }
        else{
            setPodeAposentar(false)
            setNaoPodeAposentar(true)
        }
    }
  return (
    <div>
      Idade do cachorro:
      <input type="number" className='container-input'
      value={inptIdade}
      onChange={ (event) => {setInptIdade(event.target.value)}}
      />
      <div>
        <button onClick={CalcIdade}>Calcular idade</button>
      </div>
      {resultado}
    <div>

      {podeAposentar && <PodeAposentar />}
      {naoPodeAposentar && <NaoPodeAposentar />}
    </div>

    </div>
  )
}

export default Cachorro
