var piedra, papel, tijera, juego;

function juego(yo, maquina){
    if((yo===piedra && maquina===tijera)||(yo===papel&&maquina===piedra)||(yo===tijera&&maquina===papel)){
        console.log("yo gané");
    }
    else{
        console.log("maquina ganó");
    }
}
juego(tijera, piedra);