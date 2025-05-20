var map = L.map('map').setView([51.505, -0.09], 13);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">GRUPO D</a>'
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
let coliseo = crearPuntosInteres("Coliseo", 41.890274, 12.492238, "Historico");
let sanPedro = crearPuntosInteres("Basílica de San Pedro", 41.902321, 12.453625, "Religioso");



//CREACCIÓN DE CIUDADES
const roma = crearCiudad(Roma,-29.44781,27.71233,[coliseo, sanPedro, ]);