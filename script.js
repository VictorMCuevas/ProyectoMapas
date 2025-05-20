const arrayCiudades = []


const selectCiudad = document.getElementById("ciudad");

let mapa, ciudad ="";
//DATOS DE PUNTOS DE INTERÉS
//Roma
const coliseo = crearPuntosInteres("Coliseo", 41.890274, 12.492238, "Historico");
const sanPedro = crearPuntosInteres("Basílica de San Pedro", 41.902321, 12.453625, "Religioso");
const castilloSanAngelo = crearPuntosInteres("Castillo de San Angelo", 41.903076, 12.466331, "Historico");
const panteonRoma = crearPuntosInteres("Panteón de Roma", 41.898602, 12.476837, "Religioso");
const fontanaDiTrevi = crearPuntosInteres("Fontana di Trevi", 41.900967, 12.483274, "Interes")
//Zamora
const catedral = crearPuntosInteres("Catedral", 41.499110, -5.754679, "Religioso");
const puenteDePiedra = crearPuntosInteres("Puente de Piedra", 41.499419, -5.748105, "Historico");
const plazaMayorZamora = crearPuntosInteres("Plaza Mayor de Zamora", 41.503530, -5.746697, "Interes");
const murallaZamora = crearPuntosInteres("Muralla de Zamora", 41.500496, -5.756190, "Histórico")
const plazaViriato = crearPuntosInteres("Plaza de Viriato", 41.502593, -5.748465, "Interes")

//Lugo
const murallaLugo = crearPuntosInteres("Muralla de Lugo", 43.008798, -7.559396, "Historico");
const plazaMayorLugo = crearPuntosInteres("Plaza Mayor de Lugo", 43.009700, -7.556671, "Interes");
const catedralDeLugo = crearPuntosInteres("Catedral de Lugo", 43.009572, -7.557776, "Religioso");
const domusLugo = crearPuntosInteres("A Domus do Mitreo", 43.009153, -7.559114, "Historico");
const parqueRosalia = crearPuntosInteres("Parque de Rosalía de Castro", 43.006067, -7.559653, "Interes");

//Paris
const torreEiffel = crearPuntosInteres("Torre Eiffel", 48.858253, 2.294474, "Interes");
const louvre = crearPuntosInteres("Museo del Louvre", 48.860552, 2.337720, "Cultural");
const notreDame = crearPuntosInteres("Catedral de Notre Dame", 48.852959, 2.350050, "Religioso");
const arcoDelTriunfo = crearPuntosInteres("Arco del Triunfo", 48.873797, 2.294984, "Historico");
const sagradoCorazon = crearPuntosInteres("Basílica del Sagrado Corazón", 48.886782, 2.343003, "Religioso");

//Nueva York
const centralPark = crearPuntosInteres("Central Park", 48.8561, 2.3476, "Interes");
const estatuaLibertar = crearPuntosInteres("Estatua de la Libertad", 40.689248, -74.044518, "Interes");
const puenteDeBrooklyn = crearPuntosInteres("Puente de Brooklyn", 40.708082, -73.999215, "Interes");
const empireState = crearPuntosInteres("Empire State Building", 40.748338, -73.985442, "Interes");
const moma = crearPuntosInteres("Museo de Arte Moderno", 40.761610, -73.977489, "Cultural")

//CREACCIÓN DE CIUDADES
const roma = crearCiudad("Roma", 41.8997, 12.4880, [coliseo, sanPedro, castilloSanAngelo, panteonRoma, fontanaDiTrevi]);
const zamora = crearCiudad("Zamora", 41.50633, -5.74628, [catedral, puenteDePiedra, plazaMayorZamora, murallaZamora, plazaViriato]);
const lugo = crearCiudad("Lugo", 43.01174, -7.55610, [murallaLugo, plazaMayorLugo, catedralDeLugo, domusLugo, parqueRosalia]);
const paris = crearCiudad("París", 48.8561, 2.3476, [torreEiffel, louvre, notreDame, arcoDelTriunfo, sagradoCorazon]);
const nuevaYork = crearCiudad("Nueva York", 40.71285, -74.00632, [centralPark, estatuaLibertar, puenteDeBrooklyn, empireState, moma]);


arrayCiudades.push(roma, zamora, lugo, paris, nuevaYork);


mapa = L.map('map').setView([0, 0], 0);

mostrarMapa();



function mostrarMapa() {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&#x2184; <a href="http://www.openstreetmap.org/copyright">GRUPO D</a>'
    }).addTo(mapa);
}


console.log("Antes de listener")
selectCiudad.addEventListener('change', () => {

    ciudad = selectCiudad.value;

    console.log("Hola");

    seleccionarCiudad(ciudad);
    console.log("Adios")
});

let marcadorActual = null;
function seleccionarCiudad(ciudad) {

    

   
    switch (ciudad) {
        case "roma":
            mapa.setView([roma.latitud, roma.longitud], 12);
            agregarMarcador(roma.latitud, roma.longitud);
        
            break;
        case "zamora":
            mapa.setView([zamora.latitud, zamora.longitud], 13);
            agregarMarcador(zamora.latitud, zamora.longitud);

            break;
        case "lugo":
            mapa.setView([lugo.latitud, lugo.longitud], 13);
            agregarMarcador(lugo.latitud, lugo.longitud);

            break;
        case "paris":
            mapa.setView([paris.latitud, paris.longitud], 10);
            agregarMarcador(paris.latitud, paris.longitud);

            break;
        case "nueva york":
            mapa.setView([nuevaYork.latitud, nuevaYork.longitud], 10);
            agregarMarcador(nuevaYork.latitud, nuevaYork.longitud);

            break;
        default:
            mapa.setView([0, 0], 0);
            mapa.removeLayer(marcadorActual);
            console.log("Fallo")
            break;

    }
}

/**
 * Función que agrega un marcador al mapa, elimiando el anterior
 * */
function agregarMarcador(latitud, longitud) {
    // Si hay un marcador previo, eliminarlo del mapa
    if (marcadorActual) {
        mapa.removeLayer(marcadorActual);
    }

    // Crear y agregar el nuevo marcador
    marcadorActual = L.marker([latitud, longitud]).addTo(mapa);
}

/**
 * Función que crea objetos tipo ciudad
 * @param {*} nombre Nombre de ciudad
 * @param {*} latitud Latitud
 * @param {*} longitud Longitud
 * @param {*} puntosInteres Array puntos de interés
 * @returns Retorna objeto tipo ciudad
 */

function crearCiudad(nombre, latitud, longitud, puntosInteres) {
    return {
        nombre,
        latitud,
        longitud,
        puntosInteres
    };
}

/**
 * Función que crea objetos tipo array de puntos de interés
 * @param {*} nombre Nombre de la localización
 * @param {*} latitud Latitud
 * @param {*} longitud Longitud
 * @param {*} categoria Categoría a la que pertenece le punto de interés (historico, religioso, interes...)
 * @returns Retorna array de objetos tipo punto de interés
 */
function crearPuntosInteres(nombre, latitud, longitud, categoria) {
    return {
        nombre,
        latitud,
        longitud,
        categoria
    }
}


