alert("hola")


function sumar_kit(precio){
    let kit = precio + 1000;
    return kit;    
    
}

alert("bienvenido");
alert("Todos los kits valen $1000");
let precio = parseInt(prompt("ingrese el precio del producto sin kit"));



console.log("precio del kit: " , precio);

let precio_mas_kit = sumar_kit(precio);
console.log("el precio total es de: " , precio_mas_kit);
