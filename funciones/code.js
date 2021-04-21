function imprimirNombre(nombre, apellido){
    console.log(`mi nombre es: ${nombre} ${apellido}`)
}

imprimirNombre("david", "caicedo")

function miNombreMayuscula(nombreMayuscula, apellidoMayuscula){
    nombreMayuscula = nombreMayuscula.toUpperCase()
    apellidoMayuscula = apellidoMayuscula.toUpperCase()
    console.log(`mi nombre es: ${nombreMayuscula} ${apellidoMayuscula}`)
}

miNombreMayuscula("david", "caicedo")