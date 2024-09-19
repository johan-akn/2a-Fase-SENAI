import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ManoJuca from './pages/ManoJuca'
import MediaAltura from './pages/MediaAltura'

function App() {
  const [page, setPage] = useState(<Home />)

  return (
    <>
    <div className="navbar">
      <button onClick={() => setPage(<Home />)}>Home</button>
      <button onClick={() => setPage(<ManoJuca />)}>5.7</button>
      <button onClick={() => setPage(<MediaAltura />)}>7.10</button>
    </div>
    
    {page}

    </>
  )
}

export default App
