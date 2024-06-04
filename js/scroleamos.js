window.sr=ScrollReveal();

    sr.reveal('.animacion-scroll', {
        duration: 2000,
        origin: 'bottom',
        distance: '-10px'
    });

    sr.reveal('.animacion-scroll2', {
        duration: 1500,
        origin: 'right',
        distance: '-50px'
    });

    sr.reveal('.animacion-scroll4', {
        duration: 1500,
        origin: 'left',
        distance: '-50px'
    });
    
    
    sr.reveal('.animacion-scroll3',{
        duration:1500,
        rotate: {
        
        x: 1,
        y: 180,
        
        }
    })


    // Function to check the screen width and remove class if necessary
function checkScreenWidth() {
    const element = document.querySelector('.animacion-scroll4');
    if (window.innerWidth <= 500) {
        element.classList.remove('animacion-scroll4');
    } else {
        element.classList.add('animacion-scroll4');
    }
}

// Run the function on load
window.onload = checkScreenWidth;

// Add event listener to run the function on resize
window.onresize = checkScreenWidth;



var i = 0;
var msg = 'Stackoverflow en español!...';
var velocidad = 200;

function typeWriter() {
  if (i < msg.length) {
    document.getElementById("escribetexto").innerHTML += msg.charAt(i);
    i++;
    setTimeout(typeWriter, velocidad);
  }
}