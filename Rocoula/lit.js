document.addEventListener('DOMContentLoaded', function() {
    const TRANSITION_MS = 1300;
    const transition = document.querySelector('.transition');
    const musicBackground = document.getElementById('music-background'); // Música de fondo
    const scrollSound = new Audio("Assets/ScrollMenu.ogg"); // Sonido de scroll
    const confirmSound = document.getElementById('confirm-sound'); // Sonido de confirmación
    const backSound = document.getElementById('back-sound'); // Sonido de retroceso
    const trans = document.querySelector('.trans');

    // **Ajustar volúmenes**
    musicBackground.volume = 0.4;  // Reducir volumen de la música de fondo
    scrollSound.volume = 1.0;      // Asegurar que el sonido de scroll sea más fuerte

    function setupIntroScreen() {
        transition.classList.remove('click');

        transition.addEventListener('click', function (e) {
            e.preventDefault();
            transition.classList.add('click');
            musicBackground.play();
        });

        window.addEventListener('click', function () {
            setTimeout(function () {
                transition.classList.add('fade-out');
            }, 3600);
        });
    }

    function goBackToInicio() {
        backSound.currentTime = 0;
        backSound.play();
        trans.classList.add('fade-in');

        setTimeout(function () {
            sessionStorage.setItem('pageTransition', 'inicio');
            window.location.href = "../Inicio.html";
        }, TRANSITION_MS);
    }

    function goToGenre(url) {
        // Solo se usa la transición morada: navegar poco después de que
        // las barras moradas hayan cubierto por completo la página.
        setTimeout(function () {
            window.location.href = url;
        }, 2700);
    }

    if (sessionStorage.getItem('pageTransition') === 'lists') {
        sessionStorage.removeItem('pageTransition');
        trans.classList.add('fade-in');

        setTimeout(function () {
            trans.classList.add('fade-out');
            document.documentElement.classList.remove('transition-hold');
            setupIntroScreen();
        }, 3600);
    } else {
        setupIntroScreen();
    }
  
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
                    goToGenre(url);
    
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
                goToGenre(url);
            }
        }
    });
    
  
    updateSelection(selectedIndex);

    document.querySelectorAll('.back').forEach(function (backButton) {
        backButton.addEventListener('click', function (event) {
            event.preventDefault();
            goBackToInicio();
        });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const secretDiv = document.querySelector('.secret');

    if (!secretDiv) {
        console.error('No se encontró el elemento con la clase "secret"');
        return;
    }

    secretDiv.addEventListener('click', () => {
        alert('Password is: GOAT');
    });
});
