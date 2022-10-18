/* NOMBRE DEL REPOSITORIO ES: MI_REPOSITORIO, NO OLVIDAR!! */
/* Primer preentrega */

 alert("bienvenido");
    alert("Las marcas son: KTM , KAWASAKI , HONDA , DUCATI , YAMAHA , BMW");
    alert("En el momento que escriba el nombre de la marca tiene que hacerlo todo en mayusculas");
function solicitarnombre(){
    let nombreinvalido = true;
    while(nombreinvalido){
    let nombre_marca = prompt ("Escriba el nombre de la marca que busca");
    if (nombre_marca === "KTM"){
        console.log("Su marca seleccionada es:" , nombre_marca);
        console.log("Nuestros modelos de la marca seleccionada son: RC, ADVENTURE, DUKE, MOTOCROSS");
        let lista_ktm = ["RC", [200 , 390] , "ADVENTURE", [200 , 250 , 390 , 790 , 890 , 1290] , "DUKE" , [125, 200 , 250, 390 , 790 , 890 , 1290] ,"MX" , [125 , 250 , 450]];
        console.log(lista_ktm);
        break
    }
    else if (nombre_marca === "KAWASAKI"){
        console.log("Su marca seleccionada es:" , nombre_marca);
        console.log("Nuestros modelos de la marca seleccionada son: Kawasaki Z , ZXRR, NINJA, VERYS");
        let lista_kawasaki = ["Z", [400 , 650 , 800 , 1000] , "ZXRR", [800 , 1000] , "NINJA" , [400 , 650 , 1000] ,"VERYS" , [300 , 650, 1000]];
        console.log(lista_kawasaki);
        break
    }
    else if (nombre_marca === "BMW"){
        console.log("Su marca seleccionada es:" , nombre_marca);
        console.log("Nuestros modelos de la marca seleccionada son: RRS, FR, RGS ADVENTURE");
        let lista_bmw = ["RRS", [1000] , "FR", [800 , 900] ,"RGS ADVENTURE" , [1200 , 1250]];
        console.log(lista_bmw);
        break
        
    }
    else if (nombre_marca ==="HONDA"){
        console.log("Su marca seleccionada es:" , nombre_marca);
        console.log("Nuestros modelos de la marca seleccionada son: CBR, CBR FIREBLADE, AFRICA TWIN, CRFR");
        let lista_ktm = ["CBR:", [200 , 300 , 650 , 1000] ,  "CBR FIREBLADE", [1000] , "AFRICA TWIN" , [1000] ,"CRFR" , [250 , 450]];
        console.log(lista_ktm);
        break
        
    }
    else if (nombre_marca === "YAMAHA"){
        console.log("Su marca seleccionada es:" , nombre_marca);
        console.log("Nuestros modelos de la marca seleccionada son: MT, YZF, YZ, SUPER TENERE");
        let lista_ktm = ["MT", [125, 300 , 700 , 900, 1000] , "YZ", [250 , 450] , "YZF" , [125 , 150 , 300 , 500 , 600 , 1000] ,"SUPER TENERE" , [700 , 750 , 1000 , 1200]];
        console.log(lista_ktm);
        break
        
    }
    else if (nombre_marca === "DUCATI"){
        console.log("Su marca seleccionada es:" , nombre_marca);
        console.log("Nuestros modelos de la marca seleccionada son: PANIGALE, MONSTER, STREET FIGHTER, MULTISTRADA");
        let lista_ktm = ["PANIGALE", [1000] , "MONSTER", [700 ,797 , 821 , 1200] , "STREET FIGHTER" , [1100] ,"MULTISTRADA" , [950 , 1200 , 1260]];
        console.log(lista_ktm);
        break
    }
    else if (nombreinvalido != nombre_marca){
        alert("Nombre incorrecto");
        alert("Escriba el nombre correcto de la marca buscada");
        continue
        return nombre_marca 
        }
    }
}  


solicitarnombre();
alert("En base a la marca seleccionada, mire los modelos en stock y haga su pedido detallado")
class pedido{
    constructor(marca , modelo , cilindrada){
        this.marca = marca;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
    }
}
let lista_pedidos = [];

for( let i= 0 ; i < 1 ; i++){
    let marca = prompt("ingrese la marca");
    let modelo = prompt("ingrese su modelo");
    let cilindrada = prompt("ingrese la cilindrada");

    let nuevo_pedido = new pedido(marca , modelo , cilindrada);
    lista_pedidos.push(nuevo_pedido);
}

console.log(lista_pedidos);

