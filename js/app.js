/* NOTE that this is a relatively ugly solution. I use position: relative, changing the position of each album. The initial space of the elements remains in the DOM, so you need overflow: hidden to hide it. Alternative would be position: absolute on the albums.*/

var albumCovers = document.getElementsByClassName("albumcover");
var recordBox = document.getElementById("record-collection");

const PEEK_RATIO = 1 / 8;   
function layout() {
    var n = albumCovers.length;
    var W = recordBox.clientWidth;

    var size = Math.min(400, (W - 32) / (1 + n * PEEK_RATIO));
    size = Math.max(size, 100);
    var peek = size * PEEK_RATIO;


    recordBox.style.setProperty("--size", size + "px");
    recordBox.style.setProperty("--reveal", size * 0.75 + "px");

    
    var visible = size + n * peek;
    recordBox.style.paddingLeft = Math.max(0, (W - visible) / 2) + "px";

    
    var factor = -(size - peek);
    for (var i = 0; i < n; i++) {
        albumCovers[i].style.left = (factor + (i * factor)) + "px";
        albumCovers[i].style.zIndex = "" + (999 - i);
    }
}

layout();
window.addEventListener("resize", layout);
