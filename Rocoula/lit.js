document.addEventListener('DOMContentLoaded', function() {
    const transition = document.querySelector('.transition');
    const musicBackground = document.getElementById('music-background'); // Música de fondo
    const scrollSound = new Audio("Assets/ScrollMenu.ogg"); // Sonido de scroll
    const confirmSound = document.getElementById('confirm-sound'); // Sonido de confirmación
    const backSound = document.getElementById('back-sound'); // Sonido de retroceso
    const link = document.querySelector('back-click');
    const trans= document.querySelector('.trans');
  
    // **Ajustar volúmenes**
    musicBackground.volume = 0.4;  // Reducir volumen de la música de fondo
    scrollSound.volume = 1.0;      // Asegurar que el sonido de scroll sea más fuerte
  
    // Evento para la imagen "Back"
    const backBut = document.querySelector('.back');
    backBut.addEventListener('click', function(event) {
        event.preventDefault();
        
        backSound.currentTime = 0;
        backSound.play();
  
        trans.classList.add('fade-in');
  
        setTimeout(() => {
            window.location.href = "../Inicio.html";
        }, 3800); 
    });
  
    transition.addEventListener('click', function(e) {
        e.preventDefault();
        transition.classList.add('click');
        musicBackground.play();
    });
  
    window.addEventListener('click', function() {
        setTimeout(function() {
            transition.classList.add('fade-out'); 
        }, 3600); 
    });
  
    const bubbles = document.querySelectorAll(".bubble");
    let selectedIndex = 2; 
  
    function updateSelection(index) {
        const total = bubbles.length;
        bubbles.forEach((b, i) => {
            b.classList.remove("selected", "prev", "next", "far", "faraway");
            const relativeIndex = (i - index + total) % total;
  
            if (relativeIndex === 0) {
                b.classList.add("selected");
            } else if (relativeIndex === 1) {
                b.classList.add("next");
            } else if (relativeIndex === 2) {
                b.classList.add("faraway");
            } else if (relativeIndex === total - 1) {
                b.classList.add("prev");
            } else if (relativeIndex === total - 2) {
                b.classList.add("far");
            }
        });
    }
  
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            if (event.key === "ArrowUp") {
                selectedIndex = (selectedIndex - 1 + bubbles.length) % bubbles.length;
            } else if (event.key === "ArrowDown") {
                selectedIndex = (selectedIndex + 1) % bubbles.length;
            }
            updateSelection(selectedIndex);
            scrollSound.currentTime = 0;
            scrollSound.play();
        } else if (event.key === "Enter") {
            const selectedBubble = document.querySelector(".bubble.selected");
            const url = selectedBubble.getAttribute("data-url");
    
            if (url === "Generos/WilSo/zoro.html") {
                scrollSound.currentTime = 0;
                scrollSound.play();
                const modal = document.getElementById("modal");
                modal.style.display = "flex";  
    

                const closeModalButton = document.getElementById("close-modal");
                closeModalButton.onclick = function() {
                    scrollSound.currentTime = 0;
                    scrollSound.play();
                    modal.style.display = "none";
                };

                const submitButton = document.getElementById("password-submit");
                submitButton.onclick = function() {
                    const inputPassword = document.getElementById("password-input").value;
                    // Ajusta la contraseña a la que desees
                    if (inputPassword === "GOAT") {
                        modal.style.display = "none";
    
                        // Ejecutar animación y redirigir
                        confirmSound.playbackRate = 0.8;
                        confirmSound.play();
    
                        setTimeout(() => {
                            document.getElementById("raw").style.transform = "translateX(20%)";
                        }, 300);
                        setTimeout(() => {
                            document.getElementById("childraw").style.transform = "translateX(20%)";
                            document.getElementById("childraw-1").style.transform = "translateX(20%)";
                        }, 900);
                        setTimeout(() => {
                            document.getElementById("far-raw").style.transform = "translateX(20%)";
                            document.getElementById("far-raw_1").style.transform = "translateX(20%)";
                        }, 1500);
                        setTimeout(() => {
                            window.location.href = url;
                        }, 4000);
    
                    } else {
                        alert("Contraseña Incorrecta, Denegada, Incompatible, Insostebible, Inadmisible, Desestimada, ect");
                    }
                };
            
            
            } else {
                // Para otras opciones, ejecutar el comportamiento normal
                confirmSound.playbackRate = 0.8;
                confirmSound.play();
                setTimeout(() => {
                    document.getElementById("raw").style.transform = "translateX(20%)";
                }, 300);
                setTimeout(() => {
                    document.getElementById("childraw").style.transform = "translateX(20%)";
                    document.getElementById("childraw-1").style.transform = "translateX(20%)";
                }, 900);
                setTimeout(() => {
                    document.getElementById("far-raw").style.transform = "translateX(20%)";
                    document.getElementById("far-raw_1").style.transform = "translateX(20%)";
                }, 1500);
                setTimeout(() => {
                    window.location.href = url;
                }, 4000);
            }
        }
    });
    
  
    updateSelection(selectedIndex);
  
    // Evento para la imagen "Back"
    const backButton = document.querySelector('.back');
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        backSound.currentTime = 0;
        backSound.play();
  
        setTimeout(() => {
            window.location.href = "../Inicio.html";
        }, 3700); 
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const secretDiv = document.querySelector('.secret');
    secretDiv.addEventListener('click', () => {
        alert('La contraseña es : GOAT');
    });
});
