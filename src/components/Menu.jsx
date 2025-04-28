import { Link } from "react-router-dom"
import './Menu.css'

export const Menu = () => {
    return (
   
       <nav className="navBar">
            <h1 className="title">Guilherme de Matos</h1>
            <Link className="link" to = '/'>Home</Link>
            <Link className="link" to = '/about' >Sobre</Link>

       </nav>
   
    )
   }