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

    let alturaMasc, alturaFem, mediaAlturaMasc, mediaAlturaFem
    let maiorAltura, menorAltura
    let mediaFem, mediaPop, infoMasc
    
    function AddDados(){
        if(inptGenero == 0 && cont < 10){
            if(inptAltura > maiorAltura){
                maiorAltura = `${inptAltura}m`
            }
            if(inptAltura < menorAltura){
                menorAltura = `${inptAltura}m`
            }

            alturaMasc += Number(inptAltura)

            setCont(cont + 1)
            setContMasc(contMasc + 1)

        }
        else if(inptGenero == 1 && cont < 10){
            if(inptAltura > maiorAltura){
                maiorAltura = `${inptAltura}m`
            }
            if(inptAltura < menorAltura){
                menorAltura = `${inptAltura}m`
            }

            alturaFem += Number(inptAltura)

            setCont(cont + 1)
            setContFem(contFem + 1)
        }
         if(cont >= 10){

            let infosRelatorio = {
                maior: maiorAltura,
                menor: menorAltura,
                mediaFem: mediaFem,
                mediaPop: mediaPop,
                // infoMasc: infoMasc
            }
            setStateRelatorio(infosRelatorio)
        }
        mediaAlturaFem = alturaFem / contFem
        mediaAlturaMasc = alturaMasc / contMasc
        mediaPop = (alturaFem + alturaMasc) / cont
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
            {/* FALTA % DOS HOMENS */}
       {/* {cont}
       {contMasc}
       {contFem} */}
    </div>
  )
}

export default MediaAltura
