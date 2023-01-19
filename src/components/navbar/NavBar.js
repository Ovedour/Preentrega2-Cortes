/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { Link } from 'react-router-dom'

//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget.js'

//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const NavBar = () => {//Funcion constructora


    return (

        <header className='header'>
            <a href="#a" className="logo">Fooders</a>
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="">
                <div className='menu'>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Platos</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                </div>
                <div className='menu2'>
                    <li><a href="#a"><CardWidget cantidad="10" /></a></li>
                </div>
            </ul>
        </header>

    )

}

/*#############################################
                 Exportacion
###############################################*/
export default NavBar



