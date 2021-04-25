var david = {
    nombre: 'david',
    edad: 28,
    ingeniero: true,
    civil: false,
    quimico: false,
    informatico: true
}
//una constante luego de ser definida su valor ya no puede ser modificado
//se utiliza para bloques de codigo
//const MAYOR_DE_EDAD_EN_COLOMBIA = 18
//escribir una funcion para demostrar un dato
//para usar funciones que solo van a retornar algo
//const MAYOR_DE_EDAD = persona => persona.edad >= MAYOR_DE_EDAD_EN_COLOMBIA
//para seguir desestructurar la funcion de mayor de edad podemos:
//const MAYOR_DE_EDAD = ({edad}) => edad >= MAYOR_DE_EDAD_EN_COLOMBIA
//asignarle a una variable una funciones el igual que asignarle un nombre a una funcion
//var variable function() es igual a function variable()
//tambien podemos borrar la palabra reservada function y reemplazarla por =>
const PROFESION = persona => {
    const {nombre} = persona
    console.log(`mi nombre es ${nombre}, `)

    if(persona.edad >= 18){
        console.log('soy mayor de edad')
    }
    else{
        console.log('soy menor de edad')
    }
}
PROFESION(david)