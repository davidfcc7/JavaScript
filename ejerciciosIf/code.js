/**
 * ---------------EJERCICIO 1
 */

/*
* ejercicio si es culpable o no
const culpable = prompt('Es culpable? escriba si / no')

if(culpable === 'si'){
    console.log('Es culpable')
}
else{
    console.log('Es inocente')
}*/

/**
 * ----------------------EJERCICIO 2
 */
/*
* Precio de helado
let sinTopping = 1.90
let toppingOreo = 1
let toppingKitkat = 1.50
let toppingBrownie = 0.75
let toppingLacasitos = 0.95

const helado = prompt('con que tipo de topping quieres tu helado?')

if (helado == 'oreo' || helado == 'Oreo'){
    document.write('tu helado cuesta '+toppingOreo+' euro')
}
else if (helado == 'kitkat' || helado == 'Kitkat'){
    document.write('tu helado cuesta '+toppingKitkat+' euros')
}
else if (helado == 'Brownie' || helado == 'brownie'){
    document.write('tu helado cuesta '+toppingBrownie+' euros')
}
else if (helado == 'Lacasitos' || helado == 'lacasitos'){
    document.write('tu helado cuesta '+toppingLacasitos+' euros')
}
else if (helado == 'sin topping' || helado == 'Sin topping' || helado == 'Sin Topping' || helado == 'sin Topping'){
    document.write('tu helado cuesta '+toppingLacasitos+' euros')
}
else{
    document.write('Ese tipo de topping no lo tenemos tu helado cuesta '+sinTopping+' euros')
}*/

/*
*--------------------------EJERCICIO 3
* medir el diametro y grosor de la rueda de un vehiculo y decir para que tamaño de vehiculo pertenece 
let diametro = prompt("dijite el diametro de la rueda en centimetros")
let grosor = prompt("digite el grosor en centimetros")
let pi = 3.1416

diametro /= pi
grosor /= 100

if (diametro > 1.4 && grosor < 0.4){
    console.log('El diametro de la rueda es: ' + diametro.toFixed(2) + ' y es para vehiculos grandes')
    console.log('El grosor es: ' + grosor + ' y es inferior al recomendado')
}
else if(diametro >= 0.8 && diametro <= 1.4 && grosor < 0.25){
    console.log('El diametro de la rueda es: ' + diametro.toFixed(2) + ' y es para vehiculos medianos')
    console.log('El grosor es: ' + grosor.toFixed(2) + ' y es inferior al recomendado')
}
else{
    console.log('El diametro de la rueda es: ' + diametro.toFixed(2) + ' y es para vehiculos pequeños')
}*/

