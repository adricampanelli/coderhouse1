
let usuario = prompt("Bienvenida/o , me dirias tu nombre?");
let edad = prompt ("bienvenido" + " " + usuario + ", " + "Cual es tu edad?");

if (edad > 18){
    alert("Sos mayor, bienvenido , ojalá encuentres el cuadro que desees y puedas adquirirlo")
}
else {
    alert("si sos menor asegurate de estar con un adulto a la hora de comprar un cuadro")
}




let listaCuadrosSimples = ["cuadro del clasico" , "cuadro vs boca " , "cuadro senital"];
let listaCuadrosTripticos = ["cuadro del clasico" , "cuadro vs boca " , "cuadro senital" ,"cuadro de la bandera"];

function cuantoStockHay (listado){
    let cuantosHay = 0
    for (conteo of listado ) {
        cuantosHay++
    }
    return cuantosHay
}


let numeroDeCuadrosDisponibles = cuantoStockHay(listaCuadrosSimples);
let numeroDeCuadrosDisponibles2 = cuantoStockHay(listaCuadrosTripticos);
document.write( "contamos con"+ " "  + numeroDeCuadrosDisponibles + " " + "cuadros simples disponibles" + "<br>");
document.write( "contamos con"+ " "  + numeroDeCuadrosDisponibles2 + " " + "cuadros tripticos disponibles");