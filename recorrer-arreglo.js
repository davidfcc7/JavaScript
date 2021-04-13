//arreglo con objetos dentro
var mesaTrabajo = [
    {nombre:"pantalla", precio:120000},
    {nombre:"lampara", precio:70000},
    {nombre:"cuaderno", precio:2000},
    {nombre:"boligrafos", precio:4000},
    {nombre:"portatil", precio:1500000}
];

//buscar un objeto dentro del arreglo generando un nuevo arreglo y filtra entre objetos que puedan tener un valor
/*var filtrar = mesaTrabajo.filter(function(trabajo){
    return trabajo.precio < 1500000;
});*/

//buscar un articulo mapeando el array principal y nos devuelve los datos especificos 
/*var  mapear = mesaTrabajo.map(function(trabajo){
    return trabajo.nombre;
});*/

//encontrar un valor dentro de un arreglo devolviendome un true o false segun si existe o no
/*var encontrar = mesaTrabajo.find(function(trabajo){
    return trabajo.nombre === "lampara";
});*/

//buscar los datos especificos de un valor dentro del arreglo
/*mesaTrabajo.forEach(function(trabajo){
    console.log(trabajo.nombre);
});*/

//obtener un dato verdadero o falso
var algunos = mesaTrabajo.some(function(trabajo){
    return trabajo.precio <= 70000;
});

