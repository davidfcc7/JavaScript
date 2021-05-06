//1. capturar la URL que se va a consumir

const API_URL = 'https://swapi.dev/api/'

//2. capturar la URL de los campos que se van a consumir (personas, planetas, naves)

const PEOPLE_URL = 'people/:id' // variable constante = url del campo (igual como esta en la API) / id del campo
const PLANETS_URL = 'planets/:id'
const STARSHIPS = 'starships/:id'

//3. hacer request (solicitar datos)

//4. callback -> es una funcion que sera ejecutada a futuro y la llama "$.get"

$.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, {crossDomain: true}, function (date) {
    console.log(`Hola yo soy ${date.name}, mido ${date.height} cm y peso ${date.mass} kg`)//la palabra reservada arguments contiene todos los argumentos de la funcion anterior
}) //obtener la url de la API y del primer campo, reemplazar el string ':id' por el id que deseamos obtener del campo PEOPLE_URL, crossDomain: true (colocar sistema de seguridad https para evitar suplantaciones)
$.get(`${API_URL}${PLANETS_URL.replace(':id', 3)}`, {crossDomain: true}, function (date){
    console.log(`Vengo del planeta ${date.name} que tiene un clima ${date.climate}`)
})

const URL_SHIP = `${API_URL}${STARSHIPS.replace(':id', 9)}`
const SECURITY = {crossDomain: true}
const SHIP = function (date){
    console.log(`Estoy abordo de ${date.name} modelo ${date.model} con una capacidad de ${date.passengers} pasajeros`)
}

$.get(URL_SHIP, SECURITY, SHIP)

