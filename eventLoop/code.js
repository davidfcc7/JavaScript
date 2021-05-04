console.log('a')
// ejecutar la funcion en 0 segundos
setTimeout(function (){console.log('b')}, 0) 
console.log('c')

// el programa ejecuta a, c y b ya que se le esta asignando una funcion a b y esta se coloca en cola 
// ejecutando primero a y c y luego lo que está en la cola "b"