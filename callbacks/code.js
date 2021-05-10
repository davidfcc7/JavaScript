//1. capturar la URL que se va a consumir

const API_URL = 'https://swapi.dev/api/'

//2. capturar la URL de los campos que se van a consumir (personas, planetas, naves)

const PEOPLE_URL = 'people/:id' // variable constante = url del campo (igual como esta en la API) / id del campo
const PLANETS_URL = 'planets/:id'
const STARSHIPS = 'starships/:id'
const security = { crossDomain: true }

//3. hacer request (solicitar datos)

//4. callback -> es una funcion que sera ejecutada a futuro y la llama "$.get"

/*
    * FUNCION DE OBTENER DATOS USANDO CALLBACKS
function obtenerPersonajes (idPersonaje, callback){
    //obtener la url de la API y del primer campo, reemplazar el string ':id' por el id que deseamos obtener del campo PEOPLE_URL, crossDomain: true (colocar sistema de seguridad https para evitar suplantaciones)
    const urlPeople = `${API_URL}${PEOPLE_URL.replace(':id', idPersonaje)}` 
    $.get(urlPeople, security, callback).fail(function(){
        console.log(`no se pudo obtener el presonaje`)
    })
}
    * FUNCION PARA LLAMAR EL CALLBACK
obtenerPersonajes(1, function(date){
    console.log(`Hola yo soy ${date.name}, mido ${date.height} cm y peso ${date.mass} kg`)
    //obtenerPersonajes(arguments)//la palabra reservada arguments contiene todos los argumentos de la funcion anterior
})
*/

function obtenerPersonajes(idPersonaje) {
    //obtener la url de la API y del primer campo, reemplazar el string ':id' por el id que deseamos obtener del campo PEOPLE_URL, crossDomain: true (colocar sistema de seguridad https para evitar suplantaciones)
    return new Promise(function (resolve, reject) { //funcion funciona o no funciona
        const urlPeople = `${API_URL}${PEOPLE_URL.replace(':id', idPersonaje)}`
        $.get(urlPeople, security, (datos) => resolve(datos)) //si funciona
        .fail(() => reject(idPersonaje)) //si no funciona rechaza al personaje y muestra un error
    })
}
function obtenerPlaneta(idPlaneta) {
    return new Promise(function(resolve, reject){
        const urlPlaneta = `${API_URL}${PLANETS_URL.replace(':id', idPlaneta)}`
        $.get(urlPlaneta, security, (datos)=>resolve(datos))
        .fail(()=> reject(idPlaneta))//fail obtienen un callback que imprime un error en cado de no existir el dato o perder conexion con la api
    })
}
function obtenerNave(idNave) {
    return new Promise(function(resolve, reject){
        const urlNave = `${API_URL}${STARSHIPS.replace(':id', idNave)}`
        $.get(urlNave,security,(dato)=>resolve(dato))
        .fail(()=>reject(idNave))
    })
}

let error = ()=> console.log(`error, dato no encontrado`)

obtenerPersonajes(1)
    .then((date) => console.log(`Hola yo soy ${date.name}, mido ${date.height} cm y peso ${date.mass} kg`))
    .catch(error)

obtenerPlaneta(1)
    .then((date) => console.log(`Vengo del planeta ${date.name}`))
    .catch(error)

obtenerNave(22)
    .then((date) => console.log(`y estoy abordo del ${date.name}`))
    .catch(error)