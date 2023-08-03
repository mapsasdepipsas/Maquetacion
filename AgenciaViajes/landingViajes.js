//Reto 1.3
//Escribir una función en JavaScript que recoja la información de los campos de texto y cree un
//objeto literal que se guarde en un array de objetos literales cada vez que se pulse el botón
//"solicitar información".

let viajes = [];

function recogerinfo(){
    let nombre = document.getElementById('nombre').value
    let origen = document.getElementById('origen').value
    let destino = document.getElementById('destino').value
    let personas = document.getElementById('personas').value
    let fecha = document.getElementById('fecha').value;

    let infoviaje = {
        nombre: nombre,
        origen: origen,
        destino: destino,
        personas: personas,
        fecha: fecha
    };

    viajes.push(infoviaje); //para agregar el objeto a viajes que acabamos de crear en infoviaje

    document.getElementById('nombre').value = '';
    document.getElementById('origen').value = '';
    document.getElementById('destino').value = '';
    document.getElementById('personas').value = '';
    document.getElementById('fecha').value = '';

    // para que no se recarge la página y se borren los datos que hemos recogido de la consola

    console.log(viajes);
}

//Reto 1.4
//Escribe ahora una segunda función en JavaScript que cada vez que se pulse el botón "filtrar", nos
//muestre por consola la información de las solicitudes recibidas que tengan como destino
//Canarias, Mallorca o Galicia (tener en cuenta que los usuarios pueden escribir, el destino en
//mayuscula o minuscula).

function filtrardestino() {
    let solicitudesfiltradas = viajes.filter((viaje) => {
        let destino = viaje.destino.toLowerCase();
        return destino == "canarias" || destino == "mallorca" || destino == "galicia"
    });

    //console.log(solicitudesfiltradas); //el console.log es para el 1.4


//Reto 1.5
//Modifica la función anterior para que ahora muestre esos datos en la landing page
//maquetada anteriormente.

document.getElementById("datos").innerHTML = "" //Para obtener el contenido del HTML

for (let index = 0; index < solicitudesfiltradas.length; index++) {
    let viaje = solicitudesfiltradas[index]; //en viaje le asignamos el valor de solicitudesfiltradas. Recorrerá elmtos de solicitudesfiltradas [index]
    let viajeHTML = `<p>${viaje.nombre} , ${viaje.origen} , ${viaje.destino} , ${viaje.personas} , ${viaje.fecha}</p>`; 
    //la variable tendra las propiedades del elemento viaje

    document.getElementById("datos").innerHTML += viajeHTML; // añade viajehtml a "datos"
    //+= concatena el contenido y no lo sobrescribe, lo que hace que se añadan varios elmtos <p> en "datos", uno para cada solicitud de viaje.
}
}
