function soyAsincrona(nombre, micallback){
    setTimeout(function() {
        console.log('Hola '+nombre);
        miCallback();
    }, 1000);
    
}

function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otrocallback
    }, 1000);
}

console.log('Iniciando el proceso...');
 hola('Carlos', function() {
    adios('Catlos', function(){
       console.log('Terminando el proceso');
    });
    
});
// hola('Carlos', function(){});
// adios('Carlos',function(){});
