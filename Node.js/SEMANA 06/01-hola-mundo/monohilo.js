// Imprime un mensaje en la consola.
console.log('Hola a toda la cohorte 2022')

// Inicializa una variable llamada 'i' con el valor 0.
var i = 0;

// Establece un intervalo que ejecutará la función anónima cada 1000 milisegundos (1 segundo).
setInterval(function() {
    // Imprime el valor actual de 'i' en la consola.
    console.log(i)
    // Incrementa el valor de 'i' en 1 en cada iteración.
    i++;

    // Comentario: El siguiente código está comentado y no se ejecuta.
    // if(i === 5){
    //     console.log('forzamos un error')
    //     var a = 3 + z;
    // }

}, 1000); // El intervalo se establece en 1 segundo.

// Imprime un mensaje en la consola después de la llamada a setInterval.
console.log('Segunda instrucción');
