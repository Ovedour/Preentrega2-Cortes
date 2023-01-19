/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState, useEffect } from 'react'

//Estilos
import './Test.css'
//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const Test = () => {//Funcion constructora

    const [contador, setContador] = useState(0) 

    useEffect(()=>{
        //Inicio del componente
        console.log("Inicie");

        return () => {
            console.log("Finalice");
        }
    })


    const suma = () => {
        let total = contador + 1
        setContador(total)
    }

    const resta = () => {
        let total = contador - 1
        setContador(total)

    }

    return(
        
        <div >
            <button onClick={suma}>Sumar</button>
            <p>{contador}</p>
           <button onClick={resta}>Restar</button>
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default Test
