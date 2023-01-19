/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

//Estilos
import './ItemList.css'

//Componentes
import Item from '../item/Item'


//Core

/*#############################################
                 Logica
###############################################*/
const ItemList = (props) => {

    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {

        if (categoriaId != null) {
            fetch(`https://fakestoreapi.com/products/category/${categoriaId}`)
                .then(res => res.json())
                .then(json => setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)))


        } else {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())                
                .then(json => setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)))

        }
    }, [])


    return (

        <div >
            <p>Este es el item List</p>
        <section className='itemDetail-box'>
        </section>
            {productos}
        <Link className='backto' to="/productos">Volver a mis productos</Link>
        </div>
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemList

