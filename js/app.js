/* NOTE that this is a relatively ugly solution. I use position: relative, changing the position of each album. The initial space of the elements remains in the DOM, so you need overflow: hidden to hide it. Alternative would be position: absolute on the albums.*/

var albumCovers = document.getElementsByClassName("albumcover");
var recordBox = document.getElementById("record-collection");

const PEEK_RATIO = 1 / 8;   // trozo visible de cada disco = 1/8 de su lado (50px con 400px)

function layout() {
    var n = albumCovers.length;
    var W = recordBox.clientWidth;

    // Tamaño: hasta 400px, y menos si la pantalla es estrecha
    var size = Math.min(400, (W - 32) / (1 + n * PEEK_RATIO));
    size = Math.max(size, 100);
    var peek = size * PEEK_RATIO;

    // Variables que usa el CSS
    recordBox.style.setProperty("--size", size + "px");
    recordBox.style.setProperty("--reveal", size * 0.75 + "px");

    // Centrar el conjunto visible (primer disco + tiras)
    var visible = size + n * peek;
    recordBox.style.paddingLeft = Math.max(0, (W - visible) / 2) + "px";

    // Mismo mecanismo que el original: left negativo y z-index decreciente
    var factor = -(size - peek);
    for (var i = 0; i < n; i++) {
        albumCovers[i].style.left = (factor + (i * factor)) + "px";
        albumCovers[i].style.zIndex = "" + (999 - i);
    }
}

layout();
window.addEventListener("resize", layout);
