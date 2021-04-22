var david = {
    nombre: 'david',
    apellido: 'caicedo',
    edad: 28,
    estatura: 192,
    peso: 93,
    nacionalidad: 'colombia',
    ingeniero: true,
    civil: false,
    quimico: false,
    informatico: true
}

function profesion (persona){
    var {nombre} = persona
    console.log(`mi nombre es ${nombre} y soy `)
    if (persona.ingeniero && persona.informatico){
        console.log('ingeniero de sistemas')
    }
}
profesion(david)