let desplazamiento = 0;
let desplazamiento2 = 0;

window.onload = function () {
    let fondo1 = document.getElementById("fondouno");
    let fondo2 = document.getElementById("fondodos");
    let movomiento = setInterval(function () {mover(fondo1, fondo2) }, 50);
    let reinicio = setInterval(function () {reiniciar(fondo1, fondo2) }, 2250);
}

function mover(f1, f2) {
    desplazamiento -= 10;
    desplazamiento2 = desplazamiento + 450;
    f1.style.left = desplazamiento + "px";
    f2.style.left = desplazamiento2 + "px";
}

function reiniciar(f1,f2) {
    f1.style.left = "0px";
    f2.style.left = "450px";
    desplazamiento = 0;
}