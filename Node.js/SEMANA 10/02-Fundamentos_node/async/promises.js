function hola(nombre) { 
  return new Promise(function (resolve, reject) {
      setTimeout(function () { 
          console.log("Hola" + nombre); 
          resolve(nombre); 
      }, 1000); 
  });
} 
 
// function hablar(miCallbackHablar) { 
//   setTimeout(function () { 
//     console.log("bla bla bla bla"); 
//     miCallbackHablar(); 
//   }, 1000); 
// } 

//  Aplicando Promise en la función hablar
function hablar(nombre) { // Usamos sintaxis ES6
  return new Promise( (resolve, reject)=> {
    setTimeout(function () { 
      console.log("bla bla bla bla"); 
      resolve(nombre); 
    }, 1000);
  });
} 
 
// function adios(nombre, otroCallback) { 
//   setTimeout(function () { 
//     console.log("Adios " + nombre); 
//     otroCallback(); 
//   }, 1500); 
// } 

// Aplicando Promise en la función adios
function adios(nombre) { 
  return new Promise((resolve, reject) =>{
    setTimeout(function () { 
      console.log("Adios " + nombre); //con coma nodemon tmb interpreta pero es recomendado concatenar con signo +
      resolve(); 
    // Sintaxis Es6
    }, 1000); 
  })
}

//Llamamos a la función
console.log('Iniciando el proceso');
hola('Ariel')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre)=> {
      console.log('Terminando el proceso');
  })