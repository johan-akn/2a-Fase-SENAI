import { useState } from 'react'
import './App.css'
import Maior from './components/Maior'
import Menor from './components/Menor'
import Home from './pages/Home'

function App() {
  const [inputIdade, setInputIdade] = useState()
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)


  function processarIdade(){
    if(inputIdade >= 18){
      setMaior(true)
      setMenor(false)
    }
    else{
      setMenor(true)
      setMaior(false)
    }
  }

  return (
    <>
    <Home />

    Idade:
    <input className='formularios' type="number" 
      value={inputIdade}
      onChange={ (event) => {setInputIdade(event.target.value)} }
    />

    <div>
      <button onClick={processarIdade}>Processar Idade</button>
    </div>

     {/* {inputIdade} */}
     {maior && <Maior />}
     {menor && <Menor />}

    </>
  )
}

export default App
