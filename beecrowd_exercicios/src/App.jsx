import { useState } from 'react'
import './App.css'
import Bonus from './pages/Bonus'
import DDD from './pages/DDD'
import Home from './pages/Home'
import Troco from './pages/Troco'

function App() {
  const [page, setPage] = useState(<Home />)

  return (
    <>
    <div className="nav">
      <button onClick={() => {setPage(<Home />)}}>Home</button>
      <button onClick={() => {setPage(<DDD />)}}>DDD</button>
      <button onClick={() => {setPage(<Bonus />)}}>Bonus</button>
      <button onClick={() => {setPage(<Troco />)}}>Contar notas</button>
    </div>

    <div className="body">
      {page}
    </div>
    </>
  )
}


export default App
