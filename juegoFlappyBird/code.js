var contexto = document.getElementById("lienzoJuego").getContext("2d")
contexto.canvas.width = 300
contexto.canvas.height = 530

var score = 0
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

        if(tuberias[i].x == 150){
            tuberias.push({
                x:contexto.canvas.width,
                y:Math.floor(Math.random()*tuberiaNorte.height) - tuberiaNorte.height
            })
        }
        //COLISION

        if(personaje.x + bird.width >= tuberias[i].x && personaje.x <= tuberias[i].x + tuberiaNorte.width && (personaje.y <= tuberias[i].y + tuberiaNorte.height || personaje.y + bird.height >= tuberias[i].y + espacio) || personaje.y + bird.height >= contexto.canvas.height - suelo.height){
            location.reload()
        }
        //SCORE
        if(tuberias[i].x == personaje.x){
            score ++
        }
    }
    //condiciones
    personaje.y += gravedad
    contexto.fillstyle = "rgba(0,0,0,1)"
    contexto.font = "25px Arial"
    contexto.fillText("score: " +score,10,contexto.canvas.height-40)

}

window.addEventListener("keydown", keyDown)
