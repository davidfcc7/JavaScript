var david = {
    nombre: 'david',
    edad: 28,
    ingeniero: true,
    civil: false,
    quimico: false,
    informatico: true
}

function profesion (persona){
    var {nombre} = persona
    console.log(`mi nombre es ${nombre}, `)
    if (persona.ingeniero && persona.informatico){
        console.log('soy ingeniero de sistemas y')
    }
    else{
        console.log('no soy ingeniero de sistemas y')
    }
    if(persona.edad >=18){
        console.log('soy mayor de edad')
    }
    else{
        console.log('no soy mayor de edad')
    }
}
profesion(david)