// alert("hola")


// function sumar_kit(precio){
//     let kit = precio + 1000;
//     return kit;    
    
// }

// alert("bienvenido");
// alert("Todos los kits valen $1000");
// let precio = parseInt(prompt("ingrese el precio del producto sin kit"));



// console.log("precio del kit: " , precio);

// let precio_mas_kit = sumar_kit(precio);
// console.log("el precio total es de: " , precio_mas_kit);



class Modelo_moto{
    constructor(nombre , cilindrada, estilo , año , stock, precio){
        this.nombre = nombre;
        this.cilindrada = cilindrada;
        this.estilo = estilo;
        this.año = año;
        this.stock = stock;
        this.precio = precio;
    }
    get_datos(){
        console.log("<---datos de la moto--->");
        console.log("Nombre: ", this.nombre);
        console.log("cilindrada: ", this.cilindrada);
        console.log("estilo: ", this.estilo);
        console.log("año: ", this.año);
        console.log("cantidad de unidades: " , this.stock);
        console.log("Precio de este modelo 0KM sin IVA: " , this.precio);
    }
    get_stock(){
        if(this.stock < 10){
            console.log("No hay stock en este momento, solo hay unidades para test-drive")
        }
    }
    get_iva(){
        console.log("el precio con iva es de: ", this.precio * 0.21)
    }
}

let moto_uno = new Modelo_moto("KTM", 1290, "Naked" , 2022 , 15 , 1700980);
let moto_dos = new Modelo_moto("Yamaha" , 900 , "Touring" , 2021 , 4 , 950000);



moto_uno.get_datos();
moto_uno.get_stock();
moto_uno.get_iva();
moto_dos.get_datos();
moto_dos.get_stock();
moto_dos.get_iva();