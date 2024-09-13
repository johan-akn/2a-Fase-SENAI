import React from 'react'

function Semana() {
    const [inptNumero, setInptNumero] = useState()

  return (
    <div>
      <h2>Dias da Semana</h2>

      <input type="number"
      value={inptNumero}
      onChange={ (event) => {setInptNumero(event.target.value)}}
      />

      <button>Mostrar dia</button>
      
    </div>
  )
}

export default Semana
