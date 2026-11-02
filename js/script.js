/* =========================================================
   EJERCICIO: CARTEL DEL FESTIVAL CON UN ARRAY DE OBJETOS
   JavaScript nativo (ES5): var, function, querySelector y for.
   =========================================================

   PASO 0
   Enlaza este archivo en index.html con una etiqueta <script>
   justo antes de cerrar </body>, con la ruta correcta.


   ---------------------------------------------------------
   ¿QUÉ ES UN ARRAY DE OBJETOS?
   ---------------------------------------------------------
   Un objeto agrupa varios datos de una misma cosa:
       { nombre: "Kerning", genero: "Hip hop", dia: "Sábado" }
   Se lee cada dato con un punto:  artista.nombre  →  "Kerning"

   Un array de objetos es una lista de esas "fichas". Es justo
   el formato en que nos llegarán los datos de una API (Tema 6).
   Ya tienes los datos escritos aquí debajo: no hace falta copiarlos.
   ========================================================= */

var artistas = [
    {
        nombre: "Luna Neón",
        genero: "Electrónica",
        dia: "Viernes",
        hora: "20:00",
        escenario: "Escenario Píxel",
        color: "#16BFAE",
        descripcion: "Productora de Valencia. Sesiones de synthwave y luces de neón para abrir el festival."
    },
    {
        nombre: "Serif & Sans",
        genero: "Dúo acústico",
        dia: "Viernes",
        hora: "21:30",
        escenario: "Escenario Vector",
        color: "#FFD23F",
        descripcion: "Dos voces muy distintas que encajan como una buena pareja tipográfica."
    },
    {
        nombre: "Bauhaus FM",
        genero: "Post-punk",
        dia: "Viernes",
        hora: "23:00",
        escenario: "Escenario Píxel",
        color: "#FF5C8A",
        descripcion: "Guitarras geométricas y ritmos de líneas rectas. Forma y función, también en directo."
    },
    {
        nombre: "Los Tipógrafos",
        genero: "Indie pop",
        dia: "Sábado",
        hora: "19:30",
        escenario: "Escenario Vector",
        color: "#4D9DFF",
        descripcion: "Banda formada por cuatro diseñadores gráficos. Sus portadas son tan famosas como sus canciones."
    },
    {
        nombre: "Kerning",
        genero: "Hip hop",
        dia: "Sábado",
        hora: "21:00",
        escenario: "Escenario Píxel",
        color: "#3DDC97",
        descripcion: "MC madrileño con letras sobre la vida en la ciudad. Siempre deja el espacio justo entre rima y rima."
    },
    {
        nombre: "Píxel Muerto",
        genero: "Chiptune",
        dia: "Sábado",
        hora: "23:30",
        escenario: "Escenario Vector",
        color: "#C9A7FF",
        descripcion: "Música hecha con consolas antiguas. Un concierto en 8 bits para bailar sin parar."
    },
    {
        nombre: "La Retícula",
        genero: "Jazz",
        dia: "Domingo",
        hora: "18:00",
        escenario: "Escenario Vector",
        color: "#FFA45C",
        descripcion: "Quinteto de jazz que improvisa siempre dentro de una estructura muy bien pensada."
    },
    {
        nombre: "Glitch Club",
        genero: "Techno",
        dia: "Domingo",
        hora: "20:00",
        escenario: "Escenario Píxel",
        color: "#A3E635",
        descripcion: "Visuales rotos y bajos contundentes. El error convertido en espectáculo."
    },
    {
        nombre: "Pantone 2027",
        genero: "Rock",
        dia: "Domingo",
        hora: "22:00",
        escenario: "Escenario Píxel",
        color: "#7DD3FC",
        descripcion: "Trío de rock que cambia el color de su escenografía en cada canción. Cierran el festival."
    }
];


/* =========================================================
   PASO 1 · CONOCER LOS DATOS
   Antes de pintar nada, prueba en la consola:
     - console.log(artistas.length);       ¿cuántos artistas hay?
     - console.log(artistas[0].nombre);    ¿quién es el primero?
     - console.log(artistas[4].dia);       ¿qué día toca el quinto?


   PASO 2 · PINTAR EL CARTEL
   Crea una función pintarCartel(dia) que:
     a) Vacíe #cartel (innerHTML = "").
     b) Recorra el array con un bucle for.
     c) Dentro del bucle, con un if, añada la tarjeta solo si se
        cumple una de estas dos condiciones:
          dia === "Todos"   ||   artistas[i].dia === dia
        (|| significa "o": basta con que una sea verdadera)
     d) Construya cada tarjeta concatenando HTML con la estructura
        que tienes comentada en index.html. Usa:
          artistas[i].color, artistas[i].nombre,
          artistas[i].genero, artistas[i].dia
        y pon la posición i en el atributo data-indice del botón.
     e) Cuente cuántas tarjetas ha pintado y lo escriba en
        #contador: "Mostrando 3 artistas".

   Al final del archivo llama a pintarCartel("Todos") para que el
   cartel aparezca al cargar la página.


   PASO 3 · FILTROS POR DÍA
   Elementos: .filtro (hay 4)
     a) Recorre los botones con un for y añade a cada uno un "click".
     b) Dentro del evento, this es el botón pulsado. Lee su día con
        this.getAttribute("data-dia") y llama a pintarCartel(dia).
     c) Quita la clase "is-activo" a todos los filtros (otro for)
        y añádesela solo a this.


   PASO 4 · VENTANA MODAL CON LOS DATOS
   Elementos: #modal, #modal-etiqueta, #modal-titulo,
   #modal-genero, #modal-texto, #modal-cerrar

   ¡Ojo! Los botones "Ver más" no existen hasta que pintarCartel()
   los crea. Por eso hay que añadirles el evento DENTRO de
   pintarCartel(), después del bucle que crea las tarjetas.

     a) Selecciona los .boton-artista y añade a cada uno un "click".
     b) Con this.getAttribute("data-indice") sabes la posición del
        artista en el array. Guarda el objeto en una variable:
          var artista = artistas[indice];
     c) Escribe sus datos en la modal:
          etiqueta → artista.dia + " · " + artista.hora + " · " + artista.escenario
          título, género y texto → nombre, genero y descripcion
     d) Abre la modal con la clase "is-abierta".
     e) Ciérrala con #modal-cerrar y al hacer clic en el fondo
        (if (event.target === this), como en el ejercicio anterior).


   ---------------------------------------------------------
   RETOS EXTRA
   ---------------------------------------------------------
   1. Añade un artista nuevo al array (con todos sus datos) y
      comprueba que aparece en el cartel sin tocar nada más.
   2. Muestra también la hora en la tarjeta: "Hip hop · Sábado · 21:00".
   3. Añade un filtro nuevo por escenario ("Escenario Píxel" y
      "Escenario Vector") con sus propios botones.
   4. Si un filtro no tiene artistas, muestra en #cartel el mensaje
      <p class="cartel__vacio">No hay artistas este día.</p>
   ========================================================= */


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
var modalEtiqueta = document.querySelector("#modal-etiqueta");
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