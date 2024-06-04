  document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos la sección donde queremos mostrar el botón aside
    const targetSection = document.getElementById("contacto");

    // Obtenemos la posición vertical del inicio de la sección deseada
    const targetPosition = targetSection.offsetTop;

    // Función que se ejecuta cada vez que el usuario desplaza la página
    function toggleAsideVisibility() {
      const aside = document.querySelector("aside.navigation");
      const currentPosition = window.scrollY || window.pageYOffset;

      // Si el desplazamiento vertical es mayor o igual a la posición de la sección, mostramos el botón aside; de lo contrario, lo ocultamos
      if (currentPosition >= targetPosition) {
        aside.style.display = "block";
      } else {
        aside.style.display = "none";
      }
    }

    

    // Llamamos a la función cuando se carga la página y cuando el usuario desplaza la página
    toggleAsideVisibility();
    window.addEventListener("scroll", toggleAsideVisibility);

    
  });


