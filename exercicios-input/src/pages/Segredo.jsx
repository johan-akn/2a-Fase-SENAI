import React, { useState } from 'react'

function Segredo() {
    let senha = 'abracadabra'
    const [mensagem, setMensagem] = useState()
    const [inptSenha, setInptSenha] = useState()

    function BotaoEntrar(){
        if(inptSenha == senha){
            setMensagem('shhhhhhhhhhhhhhhhhhh')
        }
        else{
            setMensagem('Senha incorreta!')
        }
    }

  return (
    <div>
      <h2>Mensagem secreta</h2>
      <p>Digite a senha e descubra a mensagem secreta (⌐■_■)</p>

      <input type="text"
         value={inptSenha}
        onChange={ (event) => {setInptSenha(event.target.value)}}
      />
      
    <div>
      <button onClick={BotaoEntrar}>Entrar</button>
    </div>
    {mensagem}
    </div>
  )
}

export default Segredo
