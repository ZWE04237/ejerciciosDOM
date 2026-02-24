window.onload = function () {
    let t = setInterval(obtenerHora, 500);
}

function obtenerHora() {
    let fecha = new Date();
    let h = fecha.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    let m = fecha.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    let s = fecha.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("reloj").innerHTML= h+":"+m+":"+s;
}