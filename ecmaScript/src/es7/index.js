let numeros = [1,2,3,4,5,6,7,8,9,0]

if(numeros.includes(0)){
    console.log(`si se encuenra el valor`)
}else{
    console.log(`no se encuentra el valor`)
}
//en esta version ya no usamos index of y sus variantes si no .includes

let base = 2
let exponente = 2
let resultado = base ** exponente

console.log(`el resultado es: ${resultado}`)