import React from 'react'
import { useState } from 'react'

function GerarNum() {
    const [randomNum, setRandomNum] = useState()

  return (
    <div>
      <button onClick={() => {setRandomNum = (Math.floor(Math.random() * 10) + 1)}}>Gerar Número</button>
    </div>
  )
}

export default GerarNum
