let palabra = 'anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero'

let palabraToArray = palabra.split("")

const invertirCadena = cadena => cadena.split("").reverse().join("");
let revesPalabra = invertirCadena(palabra);
console.log(revesPalabra);

let revesPalabraArray = revesPalabra.split("")
let palabraArray = palabra.split("")

let dic = {}

let palindromo = () => {	
	let palabraAux = []
	let count = 0
	let contPalabras = 0
	for (let i = 0; i < palabraToArray.length; i++){
		if (palabraToArray[i] === revesPalabraArray[revesPalabraArray.length-i-1]){
			count++
			palabraAux.push(palabra[i]) 
		}
		else{
			debugger
			if(count > 3){
				contPalabras++
				dic.put(contPalabras,palabraAux)
			}
			else{
				count = 0
				palabraAux.length = 0
			}
		}

	}
	return true
}

palindromo()

console.log(dic)

