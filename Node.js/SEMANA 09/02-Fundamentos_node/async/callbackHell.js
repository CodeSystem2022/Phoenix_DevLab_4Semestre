function hola(nombre, miCallback) { 
    setTimeout(function () { 
      console.log("Hola" + nombre); 
      miCallback(nombre); 
    }, 1000); 
  } 
   
  function hablar(miCallbackHablar) { 
    setTimeout(function () { 
      console.log("bla bla bla bla"); 
      miCallbackHablar(); 
    }, 1000); 
  } 
   
  function adios(nombre, otroCallback) { 
    setTimeout(function () { 
      console.log("Adios " + nombre); 
      otroCallback(); 
    }, 1500); 
  } 
  //Recursividad gestionamos la complejidad de los callback
  function conversacion(nombre, veces, miCallback) { 
    if (veces > 0) { 
      hablar(function () { 
        conversacion(nombre, --veces, miCallback);
      }); 
    } else { 
      miCallback(nombre, callback); 
    } 
  } 
   
  //--Proceso principal
  console.log("Inciando el proceso...  ");
  hola("Ariel ",  function(nombre)  {
    conversacion( nombre, 4, function () {
      
      
      console.log("Terminando el proceso... ");
    });
  });
  
  
  //El callbackHell no es una buena practica, la recomendación es crear una función recursiva que gestione este problema

  ///bloque comentado
  // hola("Carlos", function (nombre) {
  //   hablar(function () {
  //     hablar(function () {
  //       hablar(function () {
  //         hablar(function () {
  //           adios(nombre, function () {
  //             console.log("Terminando el proceso... ");
  //           });
  //         });
  //       });
  //     });
  //   });
  // });
