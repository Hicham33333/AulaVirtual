document.querySelector("button").addEventListener("click", () => {

    if (document.getElementById("usuario").value != "admin") {

        document.querySelectorAll("input").forEach(e => {
            e.classList.add("imputError")
        })

        let iconos = [...document.getElementsByClassName("iconoError")]
        iconos.forEach(e => {

            e.style.display = "block";

        })
    }
    else{
        window.location.href = "paginaInicio.html";
    }

})


document.addEventListener("DOMContentLoaded", () => {
    const botonEnviar = document.querySelector(".boton");
    const usuarioInput = document.getElementById("usuario");

    if (botonEnviar) {
        botonEnviar.addEventListener("click", (event) => {
            event.preventDefault(); 
            
            const usuario = usuarioInput.value.trim(); 
            if (usuario !== "") {
                sessionStorage.setItem("usuario", usuario); 
                alert(`Bienvenido, ${usuario}!`); 
                window.location.href = "paginaInicio.html"; 
            } else {
                alert("Por favor, ingrese un usuario.");
            }
        });
    }
});
