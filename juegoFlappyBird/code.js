var contexto = document.getElementById("lienzoJuego").getContext("2d")
contexto.canvas.width = 300
contexto.canvas.height = 530

var FPS = 60
var gravedad = 1.5
var personaje = {
    x: 30,
    y: 150,
    w: 50,
    h: 50
}
var jugadores = new Array()
jugadores[0] = {
    x: contexto.canvas.width,
    y: contexto.canvas.height - suelo.height - jugador.height
}
//imagenes
var balon = new Image()
balon.src = "./imagenes/basketball 1balon (1).png"

var jugador = new Image()
jugador.src = "./imagenes/jugador-de-baloncesto 1jugador 1jugador.png"

var fondo = new Image()
fondo.src = "./imagenes/background.png"

var suelo = new Image()
suelo.src = "./imagenes/suelo.png"
//control
function keyDown() {
    personaje.y -= 25
}
setInterval(loop,1000/FPS)
function loop(){
    contexto.clearRect(0,0,300,530)
    //fondo
    contexto.drawImage(fondo, 0, 0)
    contexto.drawImage(suelo, 0, contexto.canvas.height - suelo.height)
    //balon
    contexto.drawImage(balon, personaje.x, personaje.y)
    //jugadores
    for (var i = 0; i < jugadores.length; i++){
        var 
        contexto.drawImage(jugadorAire, jugadores[i].x, jugadores[i].y)
        contexto.drawImage(jugadorSuelo, )
    }
    //condiciones
    personaje.y += gravedad
}

window.addEventListener("keydown", keyDown)
