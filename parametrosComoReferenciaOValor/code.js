var persona = {nombre:'david', edad: 28}
function llamarPersona(usuario){
    var {nombre, edad} = usuario
    console.log(`mi nombre es ${nombre} y tengo ${edad} años`)
}
llamarPersona(persona)

//function cumpleanios(usuario){
 //   usuario.edad += 1
   // console.log(usuario)
//}
//cumpleanios(persona)

//agregar o modificar un objeto dentro de una funcion
function cumpleannios(usuario){
    return{
        ...usuario,
        edad: usuario.edad + 1,
        peso: 93
    }
}