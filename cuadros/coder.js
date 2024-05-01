
class Cuadro {
    constructor(cuadro , tamaño , disponibilidad) {
        this.cuadro = cuadro;
        this.tamaño = tamaño;
        this.disponibilidad = disponibilidad;
    }
}

let cuadroClasico2a1 = new Cuadro ("clasico 2 A 1" , "30x40" , true) ;
let cuadroClasico0a0 = new Cuadro ("clasico 0 A 0 " , "30x40" , true);
let cuadroAtardecer = new Cuadro ("cancha atardecer" , "30x40" , true) ;
let cuadro360 = new Cuadro ("cancha 360°" , "30x40" , true) ;
let cuadroClasico0a0triptico = new Cuadro ("clasico 0 a 0" , "40x80" , true) ;
let cuadroClasico2a1triptico = new Cuadro ("clasico 2 A 1 triptico" , "40x80" , true) ;
let cuadroAtardecerTriptico= new Cuadro ("cancha atardecer" , "40x80" , true) ;

let listaGeneralDeCuadros = [cuadroClasico2a1,cuadroClasico0a0,cuadroAtardecer,cuadro360,cuadroClasico0a0triptico,cuadroClasico2a1triptico,cuadroAtardecerTriptico ]
let listaCuadrosSimples = []
let listaCuadrosTripticos = []

function obtenerCuadrosSimples(lista) {
    let listaCuadrosSimples = []
    for (busqueda of lista) {
        if(busqueda.tamaño == "30x40") {
        listaCuadrosSimples.push(busqueda)
        }
    }
    return listaCuadrosSimples
 }
 
 function obtenerCuadrosTripticos(lista) {
    let listaCuadrosTripticos = []
    for (busqueda of lista) {
        if(busqueda.tamaño == "40x80") {
        listaCuadrosTripticos.push(busqueda)
        }
    }
    return listaCuadrosTripticos
 }

listaCuadrosSimples = obtenerCuadrosSimples(listaGeneralDeCuadros);
listaCuadrosTripticos = obtenerCuadrosTripticos(listaGeneralDeCuadros);


let usuario = prompt("Bienvenida/o , me dirias tu nombre?");
let respuesta = prompt ("bienvenido" + " " + usuario + ", " + "Cual cuadro querés ver primero? (simples/tripticos) ");

if (respuesta.toLowerCase() == "simples"){
    console.log(listaCuadrosSimples);
}
else if (respuesta.toLowerCase() == "tripticos") {
    console.log(listaCuadrosTripticos)
}
else {
    console.log("escribiste mal")
}


