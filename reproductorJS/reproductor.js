var cancion = document.getElementById("cancion");
var anterior = document.getElementById("anterior");
var reproducir = document.getElementById("reproducir");
var siguiente = document.getElementById("siguiente");
var artista = document.getElementById("artista");
var nombre = document.getElementById("nombre");
var letra = document.getElementById("letra");
var guardar = document.getElementById("guardar");
var menu = document.getElementById("menu");
var campoLetra = document.getElementById("campoLetra");

var canciones = ["03 Dama de fuego.mp3","07 De todo lo que existe.mp3","cancion-sin-nombre.mp3"];
var artistas = ["Chemaska","Chemaska","Chemaska"];
var nombres = ["Dama de fuego","De todo lo que existe","Cancion sin nombre"];

var cancionActual = 0;
var reproduciendo = false;

    cancion.src = canciones[cancionActual];
    artista.innerHTML = artistas[cancionActual];
    nombre.innerHTML = nombres[cancionActual];

function reproducirParar() {
    if(reproduciendo == false){

        cancion.play();
        reproducir.src = "img/Pausa.png";
        reproduciendo = true;
    }else{

        cancion.pause();
        reproducir.src = "img/Play.png";
        reproduciendo = false;
    }
}

function cancionSiguiente(){
    cancionActual++;

    if(cancionActual > canciones.length -1){
        cancionActual = 0;
    }
   
    cancion.src = canciones[cancionActual];
    artista.innerHTML = artistas[cancionActual];
    nombre.innerHTML = nombres[cancionActual];

    reproduciendo = false;
    reproducirParar();
}

function cancionAnterior(){
    cancionActual--;

    if(cancionActual < 0 ){
        cancionActual = canciones.length -1;
    }

    cancion.src = canciones[cancionActual];
    artista.innerHTML = artistas[cancionActual];
    nombre.innerHTML = nombres[cancionActual];

    reproduciendo = false;
    reproducirParar();
}

function guardarLetra() {
    var letrilla = letra.value;
    localStorage.setItem("letra", letrilla);
    alert("Letra guardada");
}

function cargarLetra() {
    campoLetra.style.display= "inline";
    if(localStorage["letra"]){
        var letraCargada = localStorage.getItem("letra");
        letra.value = letraCargada;
        console.log(letraCargada);
    }else{
        letra.placeholder = "no hay letra";
    }
    
}


reproducir.addEventListener("click", reproducirParar);
anterior.addEventListener("click", cancionAnterior);
siguiente.addEventListener("click", cancionSiguiente);
guardar.addEventListener("click", guardarLetra);
menu.addEventListener("click", cargarLetra);