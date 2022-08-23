/*
 for (let N = 1 ; N <= 10; N++) {
    
    alert (N);
}
*/



/*
let ingresarNumero = parseInt (prompt("ingresar Numero")) ;

for (let n = 2; n <= 10; N++) {

    let resultado = ingresarNumero * n ;



alert (ingresarNumero + "X" + n +"="+ resultado)

}
*/



 let entrada = prompt("Ingresar un nombre").toUpperCase();

 while(entrada != "ESC" ){
    switch (entrada) {
       case "IGNACIO":
            alert("HOLA IGNACIO");
            break;

        case "ISMAEL":
            alert("HOLA ISMAEL");
             break;
        
             case "AYELEN":
            alert("HOLA AYELEN");
             break;

        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
 }

 alert("Gracias!!!")


