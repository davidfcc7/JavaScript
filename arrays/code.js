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

//para mostrar todos los objetos dentro de un arreglo
//los arreglos pueden ser de cualquier tipo de dato
var familia = [david, lucia, sixto, gilma]

//mostrar todos los objetos de un arreglo
console.log(familia)

//mostrar los elementos de un solo objeto segun su posicion
console.log(familia[0])

//mostrar un elemento de un objeto que se encuentra dentro de un array
console.log(familia[0].altura)
console.log(familia[0]['nombre'])

//i es igual a la posicion inicial; i es menor a la cantidad de posiciones en el arreglo familia; i aumenta de a una posicion
for(var i=0; i < familia.length; i++){
    // la variable i contiene las posiciones que se le asignan a la variable familia y se empaqueta en la variable personas cada vez se haga el ciclo
    var personas = familia[i]
    console.log(`${personas.nombre} mide ${personas.altura.toFixed(2)}mts`)
}