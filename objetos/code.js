var persona = {
    nombre: 'David',
    apellido: 'caicedo',
    edad: 28,
}

function nombrePersona (usuario){
    //var nombre = usuario.nombre
    // O
    var {nombre,apellido,edad} = usuario
    console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)
}
nombrePersona(persona)
