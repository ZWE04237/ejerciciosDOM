window.onload = function(){
    const btnEnviar = document.getElementById("enviar");
    btnEnviar.addEventListener("click", mostrar);
}

function mostrar(){
    let campos = document.getElementsByName("menu");
    campos.forEach(function(v){
        if (v.checked){
            alert("Elegiste: " + v.value);
        }
    });
}