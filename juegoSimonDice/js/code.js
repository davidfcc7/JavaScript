//obtener los campos de cada color y el boton
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ultimoNivel = 3

//clase juego
class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }
// cuando oprime el boton comenzar este desaparece
    inicializar() {
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            //si el objeto lleva el mismo nombre en la asignacion se puede escribir de ambas formas
            celeste,
            violeta, 
            naranja,
            verde
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(ultimoNivel).fill(0).map(n => Math.floor(Math.random() * 4))//fill nos permite llenar un arreglo seleccionando la posicion inicial (0), map crea un array con los datos obtenidos en una funcion
    }
    siguienteNivel(){
        this.subNivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }
    transformarNumeroAColor(numero){
        switch (numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2: 
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    transformarColorANumero(color){
        switch (color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }
    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++){
            let color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }
    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }
    apagarColor(color){
        this.colores[color].classList.remove('light')
    }
    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor.bind(this))
        this.colores.violeta.addEventListener('click', this.elegirColor.bind(this))
        this.colores.naranja.addEventListener('click', this.elegirColor.bind(this))
        this.colores.verde.addEventListener('click', this.elegirColor.bind(this))
    }
    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor.bind(this))
        this.colores.violeta.removeEventListener('click', this.elegirColor.bind(this))
        this.colores.naranja.removeEventListener('click', this.elegirColor.bind(this))
        this.colores.verde.removeEventListener('click', this.elegirColor.bind(this))
    }
    elegirColor(ev){
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subNivel]){
            this.subNivel++
            if (this.subNivel === this.nivel){
                this.nivel++
                this.eliminarEventosClick()
                if(this.nivel === (ultimoNivel + 1)){
                    
                    this.ganoElJuego
                } else {
                    setTimeout(this.siguienteNivel.bind(this),2000) 
                }
            }
        }else{
            this.perdioElJuego
        }
    }
    ganoElJuego(){
        swal("Buen trabajo", "Superaste los niveles", "success")
        .then( () => {
            this.inicializar().bind(this)
        })
    }
    perdioElJuego(){
        swal("Lo siento", "has perdido", "error")
        .then( () => {
            this.eliminarEventosClick().bind(this)
            this.inicializar().bind(this)
        })
    }
}
// funcion para empezar a jugar
function empezarJuego() {
    window.juego = new Juego()
}