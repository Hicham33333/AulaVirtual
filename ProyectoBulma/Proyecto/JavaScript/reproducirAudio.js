document.addEventListener("DOMContentLoaded", () => {

  const audioIcono = document.querySelector(".iconosH"); // Seleccionamos el audio
  const icono = document.querySelectorAll(".audioIconoH");  // Seleccionamos el contenedor (botón)

  icono.forEach(e=>{
      e.addEventListener("click", function () {
          console.log("si");
          if (audioIcono.paused) {
            audioIcono.play();
          } else {
            audioIcono.pause();
          }
        });
  })
  

  const audioIcons = document.querySelectorAll(".audioIcono");

  audioIcons.forEach(icon => {
    const audio = icon.querySelector("audio");
    
    icon.addEventListener("click", () => {
    
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
});
