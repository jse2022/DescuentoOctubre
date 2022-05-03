import "./styles.css";
let mes = Number(prompt("Ingrese mes en Numero: "));
let valorProducto = Number(prompt("Ingrese valor del producto: "));
let cantidadProducto = Number(prompt("Ingrese cantidad: "));
let valorTotal = 0;
let valorConDescuento = 0;
if (mes === 10) {
  valorTotal = valorProducto * cantidadProducto;
  valorConDescuento = valorTotal - valorTotal * 0.15;
  alert("Valor de producto con descuento: " + valorConDescuento);
} else {
  valorTotal = valorProducto * cantidadProducto;
  alert("Valor de producto sin descuento: " + valorTotal);
}
