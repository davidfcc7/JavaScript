//generar una funcion para almacenar todas las variables entrantes 

function estudiantes(nombre, edad, nacionalidad, profesion){
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.profesion = profesion;
}

//generar una variable anidada al objeto estudiantes para guardar los valores del objeto
// estudianteUno es igual a estudiante objeto con nombre, edad, nacionalidad y profesion

var estudianteUno = new estudiantes("David", 28, "Colombia", "ing. sistemas");