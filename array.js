var socio = ["nombre", "apellido", "telefono", "usuario", "clave"];

//agregar otro valor al final del arreglo
var socios = socio.push("repetir clave");

//agregar otro valor y ubicarlo de primeras
var primerSocio = socio.unshift("repetir clave");

//borra el primer valor del arreglo
var borrarSocio = socio.shift();

//borra el ultimo valor de un arreglo
var ultimoSocio = socio.pop("repetir clave");

//saber la posicion de un elemento
var posicion = socio.indexOf("apellido");

//buscar valor con una posicion especifica 
socio [3];

console.log(socio);