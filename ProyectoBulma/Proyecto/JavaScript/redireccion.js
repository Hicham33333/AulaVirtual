document.addEventListener("DOMContentLoaded", function () {
   
    const iconos = document.querySelectorAll(".icon");
    iconos.forEach((icono) => {
        icono.addEventListener("click", function (event) {
            event.preventDefault()
            event.stopPropagation(); 
        });
    });


    const imagenes = document.querySelectorAll(".imagenAsignatura");

   
    imagenes.forEach((imagen) => {
        imagen.addEventListener("click", function () {
           
            window.location.href = "paginaSeccion.html"; 
        });
    });
    const imagenes3 = document.querySelectorAll(".imagenAsignatura3");

   
    imagenes3.forEach((imagen) => {
        imagen.addEventListener("click", function () {
           
            window.location.href = "paginaSeccionInterfaces.html"; 
        });
    });

    const imagenes2 = document.querySelectorAll(".imagenAsignatura2");

   
    imagenes2.forEach((imagen) => {
        imagen.addEventListener("click", function () {
           
            window.location.href = "paginaSeccionError.html"; 
        });
    });

    const botonVolver = document.querySelectorAll(".botonVolver");
    botonVolver.forEach((imagen) => {
        imagen.addEventListener("click", function () {
           
            window.location.href = "paginaInicio.html"; 
        });
    }); 
});