window.onload = function(){
    let btn = document.getElementById("boton");
    btn.addEventListener("click", mover);
}

function mover(){
    let elem = document.getElementById("animar");
    let pos = 0;
    let id = setInterval(frame, 5); // Ejecuta frame 5 milisegundos
    function frame(){
        if (pos == 350){ //Ancho div grande - ancho div pequeño, si no para en esquina superior izquierda
            clearInterval(id);
        } else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}