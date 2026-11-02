
var artistas = [
    {
        nombre: "1989",
        dia: "Pop/Rock internacional",
        hora: "20:00",
        color: "#16BFAE",
    },
    {
        nombre: "Imaginal Disk",
        dia: "Pop/Rock internacional",
        hora: "21:30",
        color: "#FFD23F",
    },
    {
        nombre: "GunsNRoses",
        dia: "Pop/Rock internacional",
        hora: "23:00",
        color: "#FF5C8A",
    },
    {
        nombre: "AM",
        dia: "Indie",
        hora: "19:30",
        color: "#4D9DFF",
    },
    
    {
        nombre: "oasis",
        dia: "Indie",
        hora: "21:00",
        color: "#3DDC97",
    },
    {
        nombre: "Currents",
        dia: "Indie",
        hora: "23:30",
        color: "#C9A7FF",
    },
    {
        nombre: "MBDTF",
        dia: "Rap",
        hora: "18:00",
        color: "#FFA45C",
    },
    {
        nombre: "TMM",
        dia: "Rap",
        hora: "20:00",
        color: "#A3E635",
    },
    {
        nombre: "LH",
        dia: "Rap",
        hora: "22:00",
        color: "#7DD3FC",
    }
];
// Empieza aquí tu código
console.log(artistas.length); 
console.log(artistas[1].nombre);

// Seleccionamos los elementos
var cartel = document.querySelector("#cartel");

//funcuion que pinta los artistas en el cartel

function pintarCartel(diaActuacion){
    var html="";


    for (var i = 0; i < artistas.length; i++ ) {
        if ( diaActuacion==="Todos"  ||  artistas[i].dia === diaActuacion ) {

                html = html +
                        '<article class="artista">' +
        
                            '<div class="artista__poster" style="background-color: ' + artistas[i].color + '">' +
        
                                '<h2 class="artista__nombre">' + artistas[i].nombre + '</h2>' +
        
                            '</div>' +
        
                            '<div class="artista__info">' +
        
                                '<p class="artista__datos">' + artistas[i].genero + ' · ' + artistas[i].dia + '</p>' +
        
                                '<button type="button" class="boton boton--borde boton-artista" data-indice="' + i + '">Ver más</button>' +
        
                            '</div>' +
        
                        '</article>';
        }

    }
//mostramos cuantos artistas se han pintado
    contador. textContent = "Mostrando " + artistas.length + " artistas.";
    cartel.innerHTML = html;


    // Paso 4: ventana modal asociada a cada boton de cada artista
    var botonesArtista = document.querySelectorAll(".boton-artista");
    for (var j = 0; j < botonesArtista.length; j++) {
        botonesArtista[j].addEventListener("click", abrirModal);
    }
}


// Paso 3: Filtros por dia 
var filtros = document.querySelectorAll(".filtro"); 
console.log(filtros);

for (var k = 0; k < filtros.length; k++) {
    filtros[k].addEventListener("click", function(){ 
        var dia = this.getAttribute("data-dia");
        pintarCartel(dia);

    });
}

//VENTANA MODAL CON DATOS
var modal = document.querySelector("#modal");
var modalTitulo = document.querySelector("#modal-titulo");
var modalGenero = document.querySelector("#modal-genero");
var modalTexto = document.querySelector("#modal-texto");





function abrirModal() {
    //creamos variable indice y sacamos el indice de this.getAtribute("data-indice")
    //variable artista artista=arstistas[indice]
    var indice = this.getAttribute("data-indice");
    var artista= artistas[indice]
    console.log(artista);

    modalTitulo.textContent = artista.nombre;
    modalGenero.textContent = artista.genero;
    modalTexto.textContent = artista.descripcion;
    //modalEtiqueta es la concentracion de dia hora y escenario
    modalEtiqueta.textContent = artista.dia +"-"+ artista.hora+"-"+ artista.escenario;
    
    modal.classList.add("is-abierta");
    var modalCerrar = document.querySelector("#modal-cerrar");
    modalCerrar.addEventListener("click", cerrarModal);

    function cerrarModal() {
        modal.classList.remove("is-abierta");
    }

}


//llamamos a la funcion

pintarCartel("Todos");