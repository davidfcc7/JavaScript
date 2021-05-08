/*function texto()
{
	var palabra="anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero"

    let palabraArray = palabra.split("")
    let dic = []

	for (let i = 0; i < palabraArray.length; i++){
        let inicial = i
        let inicialJ = ''
        let inicialJJ = ''
        for (let j = i+1; j < palabraArray.length; j++){
            if(palabraArray[i] === palabraArray[j]){
                inicialJ = palabraArray[j]
                exp =  /.{"+j+"}/gi
                inicialJJ = palabra.match(exp)

                break
            }
        }       
        console.log(`palabras palindromas reves: ${inicialJJ}`)
        console.log(`palabras palindromas correc: ${inicialJ}`)
    }
    
}
texto()*/

let cadena = 'anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero'

let cadenaArray = cadena.split("")

let palindromo = () =>{
    
    for (let i = 0; i < cadenaArray.length; i++){
        let inicial = ''
        let inicialArray = inicial.split("")
        let final = ''
        let finalArray = final.split("")
        for (let j = i+1; j < cadenaArray.length; j++){
            if (cadenaArray[i] === cadenaArray[j]){
                inicialArray = cadenaArray[i]
                finalArray = cadenaArray[j]
            } 
            console.log(inicialArray)
        }
    }
}
palindromo()

