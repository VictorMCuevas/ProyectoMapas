var map = L.map('map').setView([51.505, -0.09], 13);


const arrayCiudades = []

function crearCiudad(nombre, latitud, longitud) {
    return {
      nombre,
      latitud,
      longitud,
      puntosInteres
    };
  }

  const roma = crearCiudad(Roma,-29.44781,27.71233)

  arrayCiudades.push(roma);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">GRUPO D</a>'
}).addTo(map);