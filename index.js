
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-Kilo $1200 2-Medio kilo $750 3-Cuarto kilo $450 4-Cucurucho $300"))
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
  seleccionarProductos = Number(prompt( "1-Kilo $1200 2-Medio kilo $750 3-Cuarto kilo $450 4-Cucurucho $300 "))
}


alert("el total de la compra es de: " + total)


