/*function texto()
{
	var palabra = 'anulalaluna'
 
	for (var i = 0; i < palabra.length; i++){
		if(palabra[i] != palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
 count=0
if(texto())
{
	count += 1
    console.log(count)
}else{
	console.log('no es un palindromo')
}*/

function texto()
{
	var palabra=prompt("Escribe una palabra").toLowerCase();
 
	// eliminamos los espacios en blanco
	palabra=palabra.replace(/ /g, "");
 
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
 contador=0
if(texto())
{
	contador++
    console.log(contador)
}else{
	alert("Esto no es palíndromo")
}