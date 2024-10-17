import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/numeros">Numeros712</Link>
        <Link to="/pares">Pares</Link>
        <Link to="/maior">Maior Número</Link>
    </nav>
  )
}

export default Navbar
