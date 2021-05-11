// PALABRA RESERVADA async
// al colocar la palabra async en una funcion esta funcion se va acompilar el una cola de ejecucion, el codigo seguirá su ejecucion normal mientras esa funcion se sigue ejecutando fuera del codigo, cuanto termina el proceso del codigo la funcion se agrega al programa
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
//BUSCA LOS DATOS CON PROMISE SI EXISTEN O NO
function obtenerPersonajes(idPersonaje) {
    //obtener la url de la API y del primer campo, reemplazar el string ':id' por el id que deseamos obtener del campo PEOPLE_URL, crossDomain: true (colocar sistema de seguridad https para evitar suplantaciones)
    return new Promise(function (resolve, reject) { //funcion funciona o no funciona
        const urlPeople = `${API_URL}${PEOPLE_URL.replace(':id', idPersonaje)}`
        $.get(urlPeople, security, (datos) => resolve(datos)) //si funciona
            .fail(() => reject(idPersonaje)) //si no funciona rechaza al personaje y muestra un error
    })
}
function obtenerPlaneta(idPlaneta) {
    return new Promise(function (resolve, reject) {
        const urlPlaneta = `${API_URL}${PLANETS_URL.replace(':id', idPlaneta)}`
        $.get(urlPlaneta, security, (datos) => resolve(datos))
            .fail(() => reject(idPlaneta))//fail obtienen un callback que imprime un error en cado de no existir el dato o perder conexion con la api
    })
}
function obtenerNave(idNave) {
    return new Promise(function (resolve, reject) {
        const urlNave = `${API_URL}${STARSHIPS.replace(':id', idNave)}`
        $.get(urlNave, security, (dato) => resolve(dato))
            .fail(() => reject(idNave))
    })
}
// IMPRIME LOS DATOS QUE OPTIENE DE LA API
let error = () => console.log(`error, dato no encontrado`)

async function obtenerPersonaje() {
    var ids = [1]
    var promesasPersonaje = ids.map((idPersonaje) => obtenerPersonajes(idPersonaje))
    try{
        var date = await Promise.all(promesasPersonaje) //1. se cargan todas las promesas en promise, 2. cuando termine se guardan en la variable date y luego se muestran, este proceso debe ser asincrono para no interrumpir la ejecucion del programa
        console.table(date)
    }catch (idPersonaje){
        error(idPersonaje)
    }
}
obtenerPersonaje()



var ids = [1]
var promesasPlaneta = ids.map((idPlaneta) => obtenerPlaneta(idPlaneta))
Promise
    .all(promesasPlaneta)
    .then((date) => console.table(date))
    .catch(error)

var ids = [22]
var promesasNaves = ids.map((idNave) => obtenerNave(idNave))
Promise
    .all(promesasNaves)
    .then((date) => console.table(date))
    .catch(error)
/**
 * CADENA DE PROMESAS EN SERIE
 *
 * obtenerPersonajes(1)
    .then((date) => {
        console.log(`Hola yo soy ${date.name}, mido ${date.height} cm y peso ${date.mass} kg`)
        return obtenerPlaneta(1)
    })
    .catch(error)
    .then((date) => {
        console.log(`Vengo del planeta ${date.name}`)
        return obtenerNave(22)
    })
    .catch(error)
    .then((date) => {
        console.log(`y estoy abordo del ${date.name}`)
    })
    .catch(error)
 */

