document.addEventListener('DOMContentLoaded', function() {
    const balloons = document.querySelectorAll('.balloon');
    let selectedIndex = 2; // Empieza con el globo central

    function updateSelection(index) {
        balloons.forEach((balloon, i) => {
            balloon.classList.remove('selected');
            if (i === index) {
                balloon.classList.add('selected');
                adjustPositions(index);
            }
        });
    }

    function adjustPositions(selectedIndex) {
        balloons.forEach((balloon, i) => {
            if (i < selectedIndex) {
                balloon.style.transform = `translate(${-30 * (selectedIndex - i)}px, ${-60 * (selectedIndex - i)}px)`;
            } else if (i > selectedIndex) {
                balloon.style.transform = `translate(${30 * (i - selectedIndex)}px, ${60 * (i - selectedIndex)}px)`;
            } else {
                balloon.style.transform = 'translate(0, 0) scale(1.2)';
            }
        });
    }

    updateSelection(selectedIndex);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp' && selectedIndex > 0) {
            selectedIndex--;
        } else if (event.key === 'ArrowDown' && selectedIndex < balloons.length - 1) {
            selectedIndex++;
        }
        updateSelection(selectedIndex);
    });
});
