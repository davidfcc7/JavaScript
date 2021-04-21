var persona = {
    nombre: 'David',
    apellido: 'caicedo',
    edad: 28,
    estatura: 192,
    peso: 93
}

function nombrePersona (usuario){
    var nombre = usuario.nombre
    // O
    var {nombre} = usuario
    console.log(nombre)
}

nombrePersona(persona)
