import React from 'react'
import { useState } from 'react'
import RelatorioAltura from '../components/RelatorioAltura'
import './MediaAltura.css'

function MediaAltura() {
    const [inptGenero, setInptGenero] = useState('')
    const [inptAltura, setInptAltura] = useState('')
    const [cont, setCont] = useState(0)
    const [contMasc, setContMasc] = useState(0)
    const [contFem, setContFem] = useState(0)
    const [stateRelatorio, setStateRelatorio] = useState()
    const [somaMasc, setSomaMasc] = useState(0)
    const [somaFem, setSomaFem] = useState(0)
    const [maiorAltura, setMaiorAltura] = useState(0)
    const [menorAltura, setMenorAltura] = useState(0)



    let mediaAlturaMasc, mediaAlturaFem
    let mediaPop, infoMasc
    
    function AddDados(){
        //Verifica maior altura
        if(inptAltura > maiorAltura){
            setMaiorAltura(inptAltura)
        }
        
        //Verifica menor altura
        if(inptAltura < menorAltura){
            setMenorAltura(inptAltura)
        }

        //Insere dados masc
        if(inptGenero == 0 && cont < 10){         
            setCont(cont + 1)
            setContMasc(contMasc + 1)
            setSomaMasc (somaMasc + Number(inptAltura))

        }
        //Insere dados fem
        else if(inptGenero == 1 && cont < 10){ 
            setCont(cont + 1)
            setContFem(contFem + 1)
            setSomaFem(somaFem + Number(inptAltura))
        }

         if(cont == 10){

            mediaAlturaFem = somaFem / contFem
            mediaAlturaMasc = somaMasc / contMasc
            mediaPop = (somaFem + somaMasc) / cont
            infoMasc = contMasc / cont * 100

            let infosRelatorio = {
                maior: maiorAltura,
                menor: menorAltura,
                mediaFem: mediaAlturaFem,
                mediaPop: mediaPop,
                infoMasc: infoMasc
            }
            setStateRelatorio(infosRelatorio)
        }

    }
  return (
    <div>
      <h2>Calcular médias da população</h2>

      <p>Gênero (0=masc 1=fem)</p>

     <div>
        <input type="number"
         className='inptDias'
        value={inptGenero}
         onChange={(event) => {setInptGenero(event.target.value)}}
       /> 
     </div>

    <div>
        <p>Altura (m)</p>
        <input type="number"
        className='inptDias'
        value={inptAltura}
        onChange={(event) => {setInptAltura(event.target.value)}}
        />
    </div>

      <button onClick={AddDados}>Inserir dados</button>

       {stateRelatorio && 
            <RelatorioAltura infos={ stateRelatorio } />}

    </div>
  )
}

export default MediaAltura
