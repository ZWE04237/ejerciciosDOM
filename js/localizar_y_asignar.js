window.onload = function(){
    const destino = document.getElementById("destino");
    const btnRojo = document.getElementById("rojo");
    const btnAzul = document.getElementById("azul");

    btnRojo.addEventListener("click", function(){
        destino.style.backgroundColor = "red";
    })
    btnAzul.addEventListener("click", function(){
        destino.style.backgroundColor = "blue";
    })
};
