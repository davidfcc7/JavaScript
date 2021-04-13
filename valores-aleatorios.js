function estudiantes(nombre, edad, nacionalidad, profesion){
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.profesion = profesion;
}

var personas = [];

for (var i = 0; i < 1; i++){
    var nombre = prompt("nombre: ");
    var edad = prompt("edad: ");
    var nacionalidad = prompt("Nacionalidad: ");
    var profesion = prompt("profesion: ");

    personas.push(new estudiantes(nombre, edad, nacionalidad, profesion));
}

for (var i = 0; i < estudiantes.length; i++){
    console.log(personas[i]);
}

