const arrayCiudades = []


const selectCiudad = document.getElementById("ciudad");

let mapa, ciudad ="";
let marcadorActual = null;
let poligono = null;

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
const roma = crearCiudad("Roma", 41.8944, 12.5200, [coliseo, sanPedro, castilloSanAngelo, panteonRoma, fontanaDiTrevi]);
const zamora = crearCiudad("Zamora", 41.50633, -5.74628, [catedral, puenteDePiedra, plazaMayorZamora, murallaZamora, plazaViriato]);
const lugo = crearCiudad("Lugo", 43.01174, -7.55610, [murallaLugo, plazaMayorLugo, catedralDeLugo, domusLugo, parqueRosalia]);
const paris = crearCiudad("París", 48.8561, 2.3476, [torreEiffel, louvre, notreDame, arcoDelTriunfo, sagradoCorazon]);
const nuevaYork = crearCiudad("Nueva York", 40.71285, -74.00632, [centralPark, estatuaLibertar, puenteDeBrooklyn, empireState, moma]);


//POLIGONOS DE CIUDADES
const poligonoRoma = [
    [
        [
            [41.9756, 12.4176],[41.9904, 12.5000],[41.9774, 12.5488],[41.96038, 12.58158],[41.92335, 12.61797],[41.90215, 12.62381]
            ,[41.87122, 12.60836],[41.85051, 12.59926],[41.81303, 12.57557],[41.79512, 12.53746],[41.79486, 12.48184],[41.80664, 12.41060]
            ,[41.81572, 12.38863],[41.84425, 12.37816],[41.86406, 12.37061],[41.91339, 12.38228],[41.95477, 12.38005],[41.96983, 12.40030]
            
        ]
    ],
    [
        [
            [41.90739, 12.45536],[41.90625, 12.45588],[41.90590, 12.45781],[41.90327, 12.45777],[41.90253, 12.45841],[41.90124, 12.45824]
            ,[41.90132, 12.45624],[41.90122, 12.45474],[41.90017, 12.45468],[41.90009, 12.45294],[41.90047, 12.45099],[41.90062, 12.44790]
            ,[41.90188, 12.44562],[41.90244, 12.44657],[41.90309, 12.44772],[41.90446, 12.44886],[41.90630, 12.45058],[41.90657, 12.45152]
            ,[41.90707, 12.45393]
        ]
    ]
];



const poligonoZamora = [
    [41.49190, -5.75954], [41.49517, -5.76096], [41.49739, -5.76066],[41.50099, -5.76229],[41.50340, -5.76370],[41.51141, -5.77314],[41.51854, -5.76872],[41.52737, -5.76752],[41.52991, -5.75649],[41.52294, -5.74782],[41.52281, -5.73280],[41.52435, -5.71993],[41.52304, -5.71263],[41.51713, -5.71388],[41.49849, -5.72752],
    [41.48630, -5.73877],[41.48206, -5.75379],[41.48617, -5.75980]
]

const poligonoLugo = [
    [43.03213, -7.57250],[43.03514, -7.55499],[43.03427, -7.54383],[43.03289, -7.53405],[43.02322, -7.52460]
    ,[43.02084, -7.52443],[43.00364, -7.52941],[42.99259, -7.53336],[42.98770, -7.54211],[42.99536, -7.56065]
    ,[43.00050, -7.56065],[43.00126, -7.56598],[43.00515, -7.57696],[43.01557, -7.58434],[43.02511, -7.58074]
]

const poligonoParis= [
    [48.85342, 2.22422],[48.86596, 2.23074],[48.87296, 2.24293],[48.88030, 2.26027],[48.88346, 2.28344]
    ,[48.89463, 2.30404],[48.90005, 2.32018],[48.90084, 2.35811],[48.90163, 2.39004],[48.88222, 2.40274]
    ,[48.87262, 2.41425],[48.86539, 2.41837],[48.85173, 2.41665],[48.83489, 2.41236],[48.82438, 2.38798]
    ,[48.81432, 2.36361],[48.81512, 2.33597],[48.82540, 2.29357],[48.83422, 2.26233],[48.82574, 2.25151]
    ,[48.82676, 2.22782],[48.83229, 2.22610],[48.83806, 2.22267]
]

const poligonoNuevaYork = [
    [
        [
            [40.91727, -73.91812],[40.87120, -73.74985],[40.84575, -73.75792],[40.82614, -73.77989],[40.80483, -73.78178],[40.80510, -73.81491]
            ,[40.79769, -73.85971],[40.79353, -73.90606],[40.78287, -73.92031],[40.77806, -73.93370],[40.73996, -73.96254],[40.73658, -73.96357]
            ,[40.72097, -73.96425],[40.68570, -74.00923],[40.68011, -74.02193],[40.68428, -74.03532],[40.70081, -74.02657],[40.75649, -74.01403]
            ,[40.82706, -73.96357],[40.91364, -73.91962]
        ]
    ],
    [
        [
            [40.65134, -74.05583],[40.62691, -74.05721],[40.57628, -74.03489],[40.50818, -74.04390],[40.4775, -74.2264],[40.48684, -74.25299]
            ,[40.50838, -74.25822],[40.52110, -74.24621],[40.54622, -74.24878],[40.55933, -74.23127],[40.55770, -74.21702],[40.58749, -74.20741]
            ,[40.60118, -74.19994],[40.61441, -74.20381],[40.62275, -74.20312],[40.63160, -74.20226],[40.63662, -74.19694],[40.64554, -74.18570]
            ,[40.64671, -74.18166],[40.64163, -74.14149],[40.64339, -74.13257],[40.64795, -74.10905],[40.64860, -74.09205],[40.65082, -74.08639]
            ,[40.65121, -74.05952]
        ]
    ]
];





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

    seleccionarCiudad(ciudad);
});


function seleccionarCiudad(ciudad) {
 
    switch (ciudad) {
        case "roma":
            //agregar que se muestre la opción puntos de interés
            mapa.setView([roma.latitud, roma.longitud], 11);
            //agregarMarcador(roma.latitud, roma.longitud);
            eliminarPoligono();
            eliminarMarcador();
            agregarPoligono(poligonoRoma, 'green');
            mostrarPuntosInteres(ciudad);
            
            break;
        case "zamora":
            mapa.setView([zamora.latitud, zamora.longitud], 13);
            //agregarMarcador(zamora.latitud, zamora.longitud);
            eliminarPoligono();
            eliminarMarcador();
            agregarPoligono(poligonoZamora, 'red');
            mostrarPuntosInteres(ciudad);
            break;
        case "lugo":
            mapa.setView([lugo.latitud, lugo.longitud], 13);
           // agregarMarcador(lugo.latitud, lugo.longitud);
            eliminarPoligono();
            eliminarMarcador();
            agregarPoligono(poligonoLugo, 'orange');
            mostrarPuntosInteres(ciudad);
            break;
        case "paris":
            mapa.setView([paris.latitud, paris.longitud], 10);
           // agregarMarcador(paris.latitud, paris.longitud);
            eliminarPoligono();
            eliminarMarcador();
            agregarPoligono(poligonoParis, 'blue');
            mostrarPuntosInteres(ciudad);
            break;
        case "nueva york":
            mapa.setView([nuevaYork.latitud, nuevaYork.longitud], 10);
           // agregarMarcador(nuevaYork.latitud, nuevaYork.longitud);
            eliminarPoligono();
            eliminarMarcador();
            agregarPoligono(poligonoNuevaYork, 'purple');
            mostrarPuntosInteres(ciudad);
            break;
        default:
            mapa.setView([0, 0], 0);
            mapa.removeLayer(marcadorActual);
            eliminarPoligono();
            eliminarMarcador();
            console.log("Fallo")
            break;

    }
}
//Elimina el poligono anterior
function eliminarPoligono(){
    if(poligono != null){
        mapa.removeLayer(poligono);
    }
}
//Agrega los poligonos
function agregarPoligono(poligonoCiudad, colorPoligono){
    poligono = L.polygon(poligonoCiudad, {color: colorPoligono}).addTo(mapa);
    mapa.fitBounds(poligono.getBounds());
}

function mostrarPuntosInteres(ciudad){
   
    if(ciudad === 'roma'){
        for(let i = 0 ; i < 5; i++){
            let punto = roma.puntosInteres[i];
            agregarMarcador(punto.latitudPunto, punto.longitudPunto);
        }
    }
    if(ciudad === 'zamora'){
        for(let i = 0 ; i < 5; i++){
            let punto = zamora.puntosInteres[i];
            agregarMarcador(punto.latitudPunto, punto.longitudPunto);
        }
    }
    if(ciudad === 'lugo'){
        for(let i = 0 ; i < 5; i++){
            let punto = roma.puntosInteres[i];
            agregarMarcador(punto.latitudPunto, punto.longitudPunto);
        }
    }
    if(ciudad === 'paris'){
        for(let i = 0 ; i < 5; i++){
            let punto = roma.puntosInteres[i];
            agregarMarcador(punto.latitudPunto, punto.longitudPunto);
        }
    }
    if(ciudad === 'nueva york'){
        for(let i = 0 ; i < 5; i++){
            let punto = roma.puntosInteres[i];
            agregarMarcador(punto.latitudPunto, punto.longitudPunto);
        }
    }

        
    



}


function eliminarMarcador(){
    if (marcadorActual) {
        mapa.removeLayer(marcadorActual);
    }}
/**
 * Función que agrega un marcador al mapa, elimiando el anterior
 * */
function agregarMarcador(latitud, longitud) {
    
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
function crearPuntosInteres(nombre, latitudPunto, longitudPunto, categoria) {
    return {
        nombre,
        latitudPunto,
        longitudPunto,
        categoria
    }
}


