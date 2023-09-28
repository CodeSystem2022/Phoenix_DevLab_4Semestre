console.log('Hola a toda la cohorte 2022')

var i = 0;

setInterval(function() {  //recibe 2 argumentos, funcion para ejecutar x tiempo
    console.log(i)
    i++;

    //if(i === 5){
    //    console.log('forzamos un error')
    //    var a = 3 + z;
    //}
},1000); //1seg
console.log('Última instrucción');