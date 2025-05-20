var map = L.map('map').setView([51.505, -0.09], 13);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&#x2184; <a href="http://www.openstreetmap.org/copyright">GRUPO D</a>'
}).addTo(map);



const arrayCiudades = []

function crearCiudad(nombre, latitud, longitud,puntosInteres) {
    return {
      nombre,
      latitud,
      longitud,
      puntosInteres
    };
}

function crearPuntosInteres(nombre, latitud, longitud, categoria){
    return{
        nombre,
        latitud,
        longitud,
        categoria
    }
}


//DATOS DE PUNTOS DE INTERÉS
//Roma
let coliseo = crearPuntosInteres("Coliseo", 41.890274, 12.492238, "Historico");
let sanPedro = crearPuntosInteres("Basílica de San Pedro", 41.902321, 12.453625, "Religioso");
let castilloSanAngelo = crearPuntosInteres("Castillo de San Angelo", 41.903076, 12.466331, "Historico");
let panteonRoma = crearPuntosInteres("Panteón de Roma", 41.898602, 12.476837, "Religioso");
let fontanaDiTrevi = crearPuntosInteres("Fontana di Trevi", 41.900967, 12.483274, "Interes")
//Zamora
let catedral = crearPuntosInteres("Catedral", 41.499110, -5.754679, "Religioso");
let puenteDePiedra = crearPuntosInteres("Puente de Piedra", 41.499419, -5.748105, "Historico");
let plazaMayorZamora = crearPuntosInteres("Plaza Mayor de Zamora", 41.503530, -5.746697, "Interes");
let murallaZamora = crearPuntosInteres("Muralla de Zamora", 41.500496, -5.756190, "Histórico")
let plazaViriato = crearPuntosInteres("Plaza de Viriato", 41.502593, -5.748465, "Interes")

//Lugo
const murallaLugo = crearPuntosInteres("Muralla de Lugo", 43.008798, -7.559396, "Historico");
const plazaMayorLugo = crearPuntosInteres("Plaza Mayor de Lugo", 43.009700, -7.556671, "Interes");
const catedralDeLugo = crearPuntosInteres("Catedral de Lugo", 43.009572, -7.557776, "Religioso");
const domusLugo = crearPuntosInteres("A Domus do Mitreo", 43.009153, -7.559114, "Historico");
const parqueRosalia = crearPuntosInteres("Parque de Rosalía de Castro", 43.006067, -7.559653, "Interes");



//CREACCIÓN DE CIUDADES
const roma = crearCiudad("Roma",-29.44781,27.71233,[coliseo, sanPedro, castilloSanAngelo, panteonRoma, fontanaDiTrevi]);
const zamora = crearCiudad("Zamora", 41.50633, -5.74628, [catedral, puenteDePiedra, plazaMayorZamora, murallaZamora, plazaViriato]);
const lugo = crearCiudad("Lugo", 43.01174, -7.55610, [murallaLugo, plazaMayorLugo, catedralDeLugo, domusLugo, parqueRosalia]);