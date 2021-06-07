// codigo que busque el segundo numero mas alto de una cadena de numeros

function segundoMayor(numero){
    let primerNumero = numero[0] // 8
    let segundoNumero = 0

    for (let i = 0; i < numero.length; i++){
        if(numero[i] > primerNumero){
            segundoNumero = primerNumero // 8, 10
            primerNumero = numero[i] // 10, 11
        }
        if(numero[i] > segundoNumero && numero[i] < primerNumero){
            segundoNumero = numero[i] // 4, 6, 9
        }
    }
    return segundoNumero
}
let num = [8, 4, 6, 10, 9, 11]

console.log(segundoMayor(num))