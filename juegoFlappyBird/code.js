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
var tuberias = new Array()
tuberias[0] = {
    x: contexto.canvas.width,
    y: 0
}
//imagenes
var bird = new Image()
bird.src = "./imagenes/bird.png"

var tuberiaNorte = new Image()
tuberiaNorte.src = "./imagenes/tuberiaNorte.png"

var tuberiaSur = new Image()
tuberiaSur.src = "./imagenes/tuberiaSur.png"

var background = new Image()
background.src = "./imagenes/background.png"

var suelo = new Image()
suelo.src = "./imagenes/suelo.png"
//control
function keyDown() {
    personaje.y -= 30
}
setInterval(loop,1000/FPS)
function loop(){
    contexto.clearRect(0, 0, 300, 530)
    //fondo 
    contexto.drawImage(background, 0, 0)
    contexto.drawImage(suelo, 0, contexto.canvas.height - suelo.height)
    //balon
    contexto.drawImage(bird, personaje.x, personaje.y)
    //jugadores
    for (var i = 0; i < tuberias.length; i++){
        var espacio = tuberiaNorte.height + 80
        contexto.drawImage(tuberiaNorte, tuberias[i].x, tuberias[i].y)
        contexto.drawImage(tuberiaSur, tuberias[i].x, tuberias[i].y + espacio)
        tuberias[i].x--

        if(tuberias[i].x == 100){
            tuberias.push({
                x:contexto.canvas.width,
                y:Math.floor(Math.random()*tuberiaNorte.height) - tuberiaNorte.height
            })
        }
    }
    //condiciones
    personaje.y += gravedad
}

window.addEventListener("keydown", keyDown)
