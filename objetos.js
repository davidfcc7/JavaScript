var objetoAuto = {
    marca: "renault",
    color: "plateado",
    puertas: 5,
    modelo: 2020,
    transmision: "automatica",
    //agregar funcion
    detalles: function(){
        console.log(`Auto ${this.marca} ${this.color} ${this.modelo}`);
    }
};
objetoAuto.detalles();

// buscar un valor del objeto
objetoAuto.color