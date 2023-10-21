function hola(nombre) { 
  return new Promise(function (resolve, reject) {
      setTimeout(function () { 
          console.log("Hola" + nombre); 
          resolve(nombre); 
      }, 1000); 
  });
} 
 
function hablar(miCallbackHablar) { 
  setTimeout(function () { 
    console.log("bla bla bla bla"); 
    miCallbackHablar(); 
  }, 1000); 
} 
 
// function adios(nombre, otroCallback) { 
//   setTimeout(function () { 
//     console.log("Adios " + nombre); 
//     otroCallback(); 
//   }, 1500); 
// } 

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
  .then(adios)
  .then((nombre)=> {
      console.log('Terminando el proceso');
  })