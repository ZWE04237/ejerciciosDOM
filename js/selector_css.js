window.onload = function(){
    const btnCopiar = document.getElementById("copiar");
    btnCopiar.addEventListener("click", fCopiar);
}

function fCopiar(){
    let textoParaCopiar = document.querySelector(".texto").textContent;
    let destino = document.querySelector("p");
    destino.textContent = textoParaCopiar;
}
