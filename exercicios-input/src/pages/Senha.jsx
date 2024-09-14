import React, { useState, useEffect } from 'react'
import SenhaErro from '../components/SenhaErro'
import SenhaOk from '../components/SenhaOk'

function Senha() {
    const[resultado, setResultado] = useState()
    const[inptSenha, setInptSenha] = useState()

    function VerificarSenha(){
        if(inptSenha.length >= 8){
            setResultado(<SenhaOk />)
        }
        else{
            setResultado(<SenhaErro />)
        }
    }
  return (
    <div>
      <h2>Senha Segura</h2>
      <p>Crie uma senha com pelo menos 8 caracteres</p>

      <input type="text"
         value={inptSenha}
        onChange={ (event) => {setInptSenha(event.target.value)}}
      />
      <div>
        <button onClick={VerificarSenha}>Verificar senha</button>
        {resultado}
      </div>

    </div>
  )
}

export default Senha
