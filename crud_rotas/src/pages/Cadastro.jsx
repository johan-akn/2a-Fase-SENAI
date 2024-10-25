import React from 'react'
import { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import './Cadastro.css'

function Cadastro() {
    const {contatinho, setContatinho, contatinhos, setContatinhos} = useContext(GlobalContext)
    const [inputNome, setInputNome] = useState('')
    const [resultado, setResultado] = useState(false)

    function CadastrarContatinho(){
        // setContatinho(inputNome)
        setContatinhos([...contatinhos, inputNome])
        console.log(contatinhos)
        setResultado(true)
    }

  return (
    <div>
        <Navbar />
        <div className="cadastro-container">
            <h1>Cadastre aqui seu contato:</h1>
            <div className="input-container">
                <label htmlFor='nome'>Nome:</label>
                <input type="text"
                id='nome'
                value={inputNome}
                onChange = { (e) => {setInputNome(e.target.value)}} />
            </div>
            
            <button onClick={CadastrarContatinho}>Cadastrar contatinho</button>
            <div className="contatinhos">
                {contatinhos.map( (c, index) => (
                    <div className='card-contatinho' key={index}>
                        <p>{c}</p>
                    </div>
                ) )}
                {/* {resultado && <p>Contatinho cadastrado: {contatinhos}</p>} */}
            </div>
        </div>
    </div>
  )
}

export default Cadastro