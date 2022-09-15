

let seleccionarProductos =    [
                                "1-Kilo de helado $ 1200",
                                "2-1/2 kilo $800",
                                "3-1/4 $500",
                                "4-Cucurucho grande $300" ]
                        


                            seleccionarProductos.push("5-cucurucho chico $200");



let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado un kilo, indique cuantos potes"))
        total += cantidad(seleccionarCantidad, 1200)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es 1/2, indique cuantos potes"))
        total += cantidad(seleccionarCantidad, 750)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es 1/4, indique cuantos potes"))
      total += cantidad(seleccionarCantidad, 450)
     
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es cucurucho, cuantos potes"))
      total += cantidad(seleccionarCantidad, 300)

    default:
      break;
  }
  seleccionarProductos = Number(prompt( seleccionarProductos))
}


let entrada = prompt("Seleccioar gustos, al finalizar, escribe Listo");
const pedido = [];
while (entrada != 'Listo') {
    pedido.push(entrada);
    entrada = prompt("seleccioar otro gusto");
}
for (let index = 0; index < pedido.length; index++) {
    alert("Gusto " + index + pedido[index]);
}




alert("el total de la compra es de: " + total);

let descuento = alert ("tenemos un descueto para vos")
    
    let descuento10 = total - (total * 0.1);

    promocion =  ( total , descuento10) => {
    
    return total - descuento10;
  }

    alert (promocion(total, descuento10));



