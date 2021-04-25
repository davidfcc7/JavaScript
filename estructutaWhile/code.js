var david = {
    nombre: 'david',
    edad: 28,
    peso: 90
}

const INCREMENTO_PESO = 200
const DIAS = 365 

const aumentarPeso = persona =>{
    persona.peso = persona.peso + INCREMENTO_PESO
}
const adelgazar = persona =>{
    persona.peso = persona.peso - INCREMENTO_PESO
}
const comeMucho = () => Math.random() < 0.3
const realizaEjercicio = () => Math.random() < 0.4

const META = david.peso - 3

var dias = 0

while (david.peso > META) {
    if(comeMucho()){
        aumentarPeso(david)
    }
    if(realizaEjercicio()){
        adelgazar(david)
    }
    dias = dias + 1
}
console.log(`pasaron ${dias} dias para que ${david.nombre} bajara 3kg`)