class persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    alto(){
        return this.altura >= 1.7
    }
}   

class desarrollador extends persona{
    constructor(nombre, apellido){
        super(nombre, apellido)
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

//var david = new persona ('david', 'caicedo', 1.92)
//var dev = new desarrollador('david', 'caicedo', 1.92)