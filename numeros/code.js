var edad = 28

//la linea de codigo
edad = edad + 1
//es igual que escribir
edad += 1

var precioVino = 100
//var totalVino = precioVino / 3
// para reducir los decimales se multiplica y divide la variable en 100
// tambien se puede asignar la libreria math.round
var totalVino = Math.round(precioVino / 3) 
// para mostrar la cantidad de valores despues del punto se asigna la cantidad a toFixed
var totalString = totalVino.toFixed(2)
// pasar de string a decimal
var totalDecimal = parseFloat(totalString)


console.log(edad)
console.log(totalVino)
console.log(totalString)
console.log(totalDecimal)