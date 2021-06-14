//---------------ECMASCRIPT6

//--------------------ANTES

//funciones
function name(name, age) {
    var name = name || 'david'
    var age = age || 28
    console.log(name, age)
}
//concatenacion
let hola = "hola"
let mundo = "mundo"
let palabra = hola + ' ' + mundo
console.log(palabra)
// parrafos
let texto = "este es el primer parrafo \n" + "y este es el segundo parrafo"
console.log(texto)
//objetos
let persona = {
    nombre: 'david',
    edad: 23
}
console.log(persona.nombre, persona.edad)
//arreglos
let equipos = ['david', 'victor', 'camilo', 'adriana', 'alejandra', 'lorena']
console.log(equipos)

//-------------------------AHORA

//funciones
function name2(name = 'david', age = 28) {
    console.log(name, age)
}
name2()
//concatenacion
let hola = "hola"
let mundo = "mundo"
console.log(`${hola} ${mundo}`)
//parrafos
let texto = `este es el primer parrago
y este el segundo`
console.log(texto)
//objetos
let persona = {
    nombre: 'david',
    edad: 23
}
let {nombre, edad} = persona
console.log(nombre, edad)
//arreglos
let hombres = ['david', 'victor', 'camilo']
let mujeres = ['adriana', 'alejandra', 'lorena']

let equipos = [...hombres, ...mujeres]
console.log(equipos)

// promesas
const promesa = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            resolve('Bien')
        }else{
            reject('mal')
        }
    })
}
promesa()
    .then (response => console.log(response))
    .then (() => console.log('hola'))
    .catch (error => console.log(error))