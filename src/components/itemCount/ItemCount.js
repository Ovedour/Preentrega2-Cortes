/*
                 Importaciones*/

//Modulos
import { useState } from 'react'
//Estilos
import './ItemCount.css'
//Componentes
//Core

/*
                 Logica
*/
const ItemCount = (props) => {//Funcion constructora

 
    //useState
    const [count,setCount] = useState(0)

    //Funciones de sumar uno con un maximo de sock
    const addOne = () => {
        if(count < props.stock) {
            setCount(count + 1)
        }
    }

    //Funcion de restar uno al contador seteando un minimo
    const disOne = () => {
        if(count > 0) {
            setCount(count - 1)
        }

    }

    //Funcion agregar X cantidad de productos
    const onAdd = () => {
        console.log(count);
    }


    return(
        
        <div className='box-count'>
            <div className='box-count-children'>
            <button onClick={disOne}>-</button>
            <p id='count-number'>{count}</p>
            <button onClick={addOne}>+</button>
            </div>
            <button onClick={onAdd}>Add</button>
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemCount
