var david = {
    nombre: 'david',
    edad: 28,
    peso: 90
}
const AUMENTO = 0.2
const DIAS_DEL_ANNIO = 365

console.log(`mi nombre es ${david.nombre} y mi peso inicial es: ${david.peso} kg`)

const aumentarPeso = (persona) => {persona.peso += AUMENTO}
const adelgazar = (persona) => {persona.peso -= AUMENTO}

for (var i = 1; i <= DIAS_DEL_ANNIO; i++){
    var aleatorio = Math.random()
    if (aleatorio < 0.25){
        aumentarPeso(david)
    }else if (aleatorio < 0.50){
        adelgazar(david)
    }
}

console.log(`mi nombre es ${david.nombre} peso actual es: ${david.peso.toFixed(1)}`)