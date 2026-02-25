window.onload = function(){
    const imagen = document.getElementById("imagen");
    imagen.addEventListener("click", cambiar);
}

function cambiar(){
    if (imagen.src.includes("img/pic_bulboff.gif")){
        imagen.setAttribute('src', 'img/pic_bulbon.gif');
    } else {
        imagen.setAttribute('src', 'img/pic_bulboff.gif');
    }
}