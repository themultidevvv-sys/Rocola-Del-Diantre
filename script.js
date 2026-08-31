document.addEventListener('DOMContentLoaded', function () {
    const TRANSITION_MS = 1300;
    const modal = document.getElementById('modal');
    const acceptBtn = document.getElementById('accept');
    const declineBtn = document.getElementById('decline');
    const audio = document.getElementById('audio');
    const clickSound = document.getElementById('click-sound');
    const backgroundVideo = document.getElementById('background-video');
    const link = document.querySelector('.link');
    const transition = document.getElementById('transition');

    backgroundVideo.pause();

    if (sessionStorage.getItem('pageTransition') === 'inicio') {
        sessionStorage.removeItem('pageTransition');
        document.documentElement.classList.remove('transition-hold');
        transition.classList.add('fade-in');

        setTimeout(function () {
            transition.classList.add('fade-out');
        }, 3600);
    }

    function playClickSound() {
        clickSound.currentTime = 0;
        clickSound.play();
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    function onSelection() {
        hideModal();
        backgroundVideo.currentTime = 0;
        backgroundVideo.play();
    }

    acceptBtn.addEventListener('click', function () {
        onSelection();
        audio.play().catch(function () {});
    });

    declineBtn.addEventListener('click', onSelection);

    link.addEventListener('click', function (e) {
        e.preventDefault();
        playClickSound();
        transition.classList.add('fade-in');

        setTimeout(function () {
            sessionStorage.setItem('pageTransition', 'lists');
            window.location.href = 'Rocoula/lists.html';
        }, TRANSITION_MS);
    });
});