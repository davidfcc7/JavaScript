var david = {
    nombre: 'david',
    apellido: 'caicedo',
    altura: 1.92
}

var lucia = {
    nombre: 'lucia',
    apellido: 'caicedo',
    altura: 1.58
}

var sixto = {
    nombre: 'sixto',
    apellido: 'caicedo',
    altura: 1.70
}

var gilma = {
    nombre: 'gilma',
    apellido: 'canchon',
    altura: 1.68
}
//esto es una funcion flecha que retorna un valor

//para mostrar todos los objetos dentro de un arreglo
//los arreglos pueden ser de cualquier tipo de dato
var familia = [david, lucia, sixto, gilma]

//filtrar objetos de un array por elementos (una funcion declarada)
var personasAltas = familia.filter(function (persona){
    return persona.altura >= 1.7 
})

var personasBajas = familia.filter(function({altura}){
    return altura < 1.7 
})

//mostrar todos los objetos de un arreglo
console.log(familia)

//mostrar los elementos de un solo objeto segun su posicion
console.log(familia[0])

//mostrar un elemento de un objeto que se encuentra dentro de un array
console.log(familia[0].altura)
console.log(familia[0]['nombre'])

console.log(personasAltas)
console.log(personasBajas)