class Icono {

    constructor(){
        this.state = true
        this.date = ""
    }


    cambiarEstado = () => {
        this.state = !this.state
    }

}

const icono = new Icono()

icono.cambiarEstado()
icono.cambiarEstado()





