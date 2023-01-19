/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { Link } from 'react-router-dom'
//Estilos
import './ItemListContainer.css'

//Componentes
import ItemList from '../itemList/ItemList'


//Core

/*#############################################
                 Logica
###############################################*/
const ItemListContainer = (props) => {//Funcion constructora


    return(
        
        <div className='main-section'>
            <p>{props.greeting}</p>

            <section>
                <h1>Banner</h1>
                <h3>Categorías</h3>
                <div>
            <Link to="/categoria/men's%20clothing">Men's Clothing</Link>
                </div>
                <div>
            <Link to="/categoria/jewelery">Jewelery</Link>
                </div>
                <div>
            <Link to="/categoria/electronics">Electronics</Link>
                </div>
                <div>
            <Link to="/categoria/women's%20clothing">Women's Clothing</Link>
                </div>
            </section>
            <ItemList />
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemListContainer



