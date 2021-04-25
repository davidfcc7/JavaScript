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
const MAYOR_DE_EDAD_EN_COLOMBIA = 18 
//escribir una funcion para demostrar un dato
function mayorDeEdad (persona){
    return persona.edad >= MAYOR_DE_EDAD_EN_COLOMBIA
}
function profesion (persona){

    var {nombre} = persona
    console.log(`mi nombre es ${nombre}, `)

    if(mayorDeEdad){
        console.log('soy mayor de edad')
    }
    else{
        console.log('soy menor de edad')
    }
}
profesion(david)