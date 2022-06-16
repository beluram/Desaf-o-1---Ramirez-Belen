let cant_productos = parseInt(prompt("Cuántas tortas querés sumar a tu compra?"));
let suma_total = 0;
let nombre_producto;
let precio_producto = 0;

for (let tortas = 1; tortas <= cant_productos; tortas++) {
    nombre_producto = prompt("Ingrese el nombre de la torta #" + tortas + ": ");
    precio_producto = parseInt(prompt("Ingrese el valor del la torta #" + tortas + ": "));
    alert("Ingresaste: " + nombre_producto + " $ " + precio_producto);
    suma_total += precio_producto;
}

alert("El total de su compra es: $ " + suma_total);
