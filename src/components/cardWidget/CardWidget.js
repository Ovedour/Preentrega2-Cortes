/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './CardWidget.css'
//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const CardWidget = (props) => {//Funcion constructora

    return(
        
        <div className='cart-box'>
            <span className="material-symbols-outlined">shopping_cart</span>
            <p>{props.cantidad}</p>
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default CardWidget



