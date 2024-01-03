document.getElementById('inicio').addEventListener('click', function() {
    window.location.href = '../index.html';  // Ajusta la ruta segÃºn la ubicaciÃ³n de tu archivo
});

document.getElementById('opcion1').addEventListener('click', function() {
    cargarContenido('Opcion1index.html');
});

document.getElementById('opcion2').addEventListener('click', function() {
    cargarContenido('servicio_opcion2.html');
});

// Repite este patrÃ³n para cada opciÃ³n del desplegable //

function cargarContenido(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('contenido-seccion').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}

// Otros scripts que ya tenÃ­as
var serviciosDropdown = document.getElementById('servicios-dropdown');
var serviciosDropdownContent = document.getElementById('servicios-dropdown-content');

serviciosDropdown.addEventListener('click', function() {
    serviciosDropdownContent.style.display = (serviciosDropdownContent.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('creditos').addEventListener('click', function() {
    window.location.href = 'index2.html';
});