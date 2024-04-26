const actividades = [
    { imagen: 'actividad1.jpg', tipo: 'buena' },
    { imagen: 'actividad2.jpg', tipo: 'buena' },
    { imagen: 'actividad3.jpg', tipo: 'buena' },
    { imagen: 'actividad4.jpg', tipo: 'mala' },
    { imagen: 'actividad5.jpg', tipo: 'mala' },
    { imagen: 'actividad6.jpg', tipo: 'buena' },
    { imagen: 'actividad7.jpg', tipo: 'mala' },
    { imagen: 'actividad8.jpg', tipo: 'buena' },
    { imagen: 'actividad9.jpg', tipo: 'mala' },
    { imagen: 'actividad10.jpg', tipo: 'buena'},
    { imagen: 'actividad11.jpg', tipo: 'buena' },
    { imagen: 'actividad12.jpg', tipo: 'buena' },
    { imagen: 'actividad13.jpg', tipo: 'mala' },
    { imagen: 'actividad14.jpg', tipo: 'buena' },
    { imagen: 'actividad15.jpg', tipo: 'mala' },
    { imagen: 'actividad16.jpg', tipo: 'mala' },
    { imagen: 'actividad17.jpg', tipo: 'buena' },
    { imagen: 'actividad18.jpg', tipo: 'buena' },
    { imagen: 'actividad19.jpg', tipo: 'mala' },
    { imagen: 'actividad20.jpg', tipo: 'buena'},
    { imagen: 'actividad21.jpg', tipo: 'mala' },
    { imagen: 'actividad22.jpg', tipo: 'buena' },
    { imagen: 'actividad23.jpg', tipo: 'buena' },
    { imagen: 'actividad24.jpg', tipo: 'buena' },
    { imagen: 'actividad25.jpg', tipo: 'mala' },
    { imagen: 'actividad26.jpg', tipo: 'buena' },
    { imagen: 'actividad27.jpg', tipo: 'mala' },
    { imagen: 'actividad28.jpg', tipo: 'mala' },
    { imagen: 'actividad29.jpg', tipo: 'buena' },
    { imagen: 'actividad30.jpg', tipo: 'mala'},
    { imagen: 'actividad31.jpg', tipo: 'buena' },
    { imagen: 'actividad32.jpg', tipo: 'mala' },
    { imagen: 'actividad33.jpg', tipo: 'buena' },
    { imagen: 'actividad34.jpg', tipo: 'mala' },
    { imagen: 'actividad35.jpg', tipo: 'mala' },
    { imagen: 'actividad36.jpg', tipo: 'buena' },
    { imagen: 'actividad37.jpg', tipo: 'buena' },
    { imagen: 'actividad38.jpg', tipo: 'buena' },
    { imagen: 'actividad39.jpg', tipo: 'buena' },
    { imagen: 'actividad40.jpg', tipo: 'buena'},
    { imagen: 'actividad41.jpg', tipo: 'buena' },
    { imagen: 'actividad42.jpg', tipo: 'buena' },
    { imagen: 'actividad43.jpg', tipo: 'buena' },
    { imagen: 'actividad44.jpg', tipo: 'buena' },
    { imagen: 'actividad45.jpg', tipo: 'mala' },
    { imagen: 'actividad46.jpg', tipo: 'mala' },
    { imagen: 'actividad47.jpg', tipo: 'buena' },
    { imagen: 'actividad48.jpg', tipo: 'mala' },
    // Agrega más actividades según lo necesites
];

let indiceActual = 0;

document.addEventListener('DOMContentLoaded', function() {
    cargarActividad();
});

function cargarActividad() {
    const imagenActividad = document.getElementById('imagenActividad');
    imagenActividad.src = `imagenes/${actividades[indiceActual].imagen}`;
    imagenActividad.alt = actividades[indiceActual].tipo;
}

function responder(respuesta) {
    const sonidoIncorrecto = document.getElementById('sonidoIncorrecto');
    const sonidoAplausos = document.getElementById('sonidoAplausos');
    
    if (respuesta === imagenActividad.alt) {
        sonidoAplausos.play();
        alert('¡Correcto!');
        indiceActual = (indiceActual + 1) % actividades.length;
        cargarActividad();
    } else {
        sonidoIncorrecto.play();
        alert('¡Incorrecto! Inténtalo de nuevo.');
    }
}
