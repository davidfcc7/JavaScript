//obtener los campos de cada color y el boton
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

//clase juego
class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
    }
// cuando oprime el boton comenzar este desaparece
    inicializar() {
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            //si el objeto lleva el mismo nombre en la asignacion se puede escribir de ambas formas
            celeste: celeste,
            violeta: violeta, 
            naranja,
            verde
        }
    }
    generarSecuencia(){
        this.generarSecuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))//fill nos permite llenar un arreglo seleccionando la posicion inicial (0), map crea un array con los datos obtenidos en una funcion
    }
}
// funcion para empezar a jugar
function empezarJuego() {
    window.juego = new Juego()
}