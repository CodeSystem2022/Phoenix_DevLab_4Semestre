// traemos el módulo de file system
// sirve para trabajar y manipular archivos de nuestro sistema

const fs = require('fs'); //ya viene instalado en el core de Node

//Primero leemos el archivo.txt
function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    
    
    })
}

leer(`${__dirname}/archivo.txt`, console.log); //Sintaxis ES6

//Segundo escribimos el archivo1.txt creandolo
function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta,contenido,function(err){
        if (err) {
            console.log('No se a podido escribir',err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    })
}

//escribir(`${__dirname}/archivo1.txt`, 'Reescribimos el archivo', console.log);
leer(`${__dirname}/archivo1.txt`, console.log); //Sintaxis ES6