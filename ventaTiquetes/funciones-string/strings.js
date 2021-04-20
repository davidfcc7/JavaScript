var nombre = 'David Felipe'
var apellido = 'Caicedo Canchon'
var edad = 28
//mayusculas
var nombreMayuscula = nombre.toUpperCase()
//minusculas
var apellidoMinuscula = apellido.toLowerCase()
//saber la primera letra -- 0 indica la posicion
var primeraLetraNombre = nombre.charAt(0)
// cantidad de caracteres de un string
var cantidadLetrasNombre = nombre.length
var cantidadLetrasApellido = apellido.length
//obtener n caracteres desde la posicion n
var posicionCantidad = nombre.substr(1, 4)
//ultima letra de mi nombre
var ultimaLetra = nombre.charAt(11)

//dentro de las llaves se puede escribir codigo js
console.log('me llamo ' + `${nombreMayuscula} ${apellidoMinuscula}` + ' y tengo ' + edad + ' años')
console.log('la primera letra de mi nombre es: ' + primeraLetraNombre)
console.log('mi nombre tiene ' + cantidadLetrasNombre + ' letras y mi apellido ' + cantidadLetrasApellido + ' letras')
console.log('las letras de mi nombre despues de la primera son: ' + posicionCantidad)
console.log('la ultima letra de mi nombre es: ' + ultimaLetra)