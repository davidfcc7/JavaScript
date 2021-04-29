function persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

persona.prototype.alto = function (){
    return this.altura >= 1.7
}

persona.prototype.bajo = function(){
    return this.altura < 1.7
}

persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}
var david = new persona ('david', 'caicedo', 1.92)

console.log(david.saludar())