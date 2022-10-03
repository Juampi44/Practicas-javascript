/* NOMBRE DEL REPOSITORIO ES: MI_REPOSITORIO, NO OLVIDAR!! */
/* Primer preentrega */




 alert("bienvenido");
    alert("Las marcas son: KTM , KAWASAKI , HONDA , DUCATI , YAMAHA , BMW");
    alert("En el momento que escriba el nombre de la marca tiene que hacerlo todo en mayusculas");

    let nombre = prompt ("Escriba el nombre de la marca que busca");
    if (nombre == "KTM"){
        console.log("Su marca seleccionada es:" , nombre);
        console.log("Nuestros modelos de la marca seleccionada son: RC, ADVENTURE, DUKE, MOTOCROSS");
    }
    else if (nombre == "KAWASAKI"){
        console.log("Su marca seleccionada es:" , nombre);
        console.log("Nuestros modelos de la marca seleccionada son: Kawasaki Z , ZXRR, NINJA, VERYS")
    }
    else if (nombre == "BMW"){
        console.log("Su marca seleccionada es:" , nombre);
        console.log("Nuestros modelos de la marca seleccionada son: RRS, FR, SRR , RGS ADVENTURE")
    }
    else if (nombre =="HONDA"){
        console.log("Su marca seleccionada es:" , nombre);
        console.log("Nuestros modelos de la marca seleccionada son: CBR, CBR FIREBLADE, AFRICA TWIN, CRFR")
    }
    else if (nombre == "YAMAHA"){
        console.log("Su marca seleccionada es:" , nombre);
        console.log("Nuestros modelos de la marca seleccionada son: MT, YZF, YZ, SUPER TENERE")
    }
    else if (nombre == "DUCATI"){
        console.log("Su marca seleccionada es:" , nombre);
        console.log("Nuestros modelos de la marca seleccionada son: PANIGALE, MONSTER, STREET FIGHTER, MULTISTRADA")
    }
    else{
        console.log("Escriba el nombre de la marca que busca por favor");
    }