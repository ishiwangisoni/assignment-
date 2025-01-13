document.getElementById('toggleMenu').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
});

function adjustPageWidth() {
    const width = window.innerWidth;
    const body = document.body;

    if (width >= 992 && width <= 1600) {
        body.style.transform = 'scale(0.9)';
        body.style.transformOrigin = 'top left';
    } else if (width >= 700 && width <= 767) {
        body.style.transform = 'scale(0.8)';
        body.style.transformOrigin = 'top left';
    } else if (width >= 600 && width < 700) {
        body.style.transform = 'scale(0.75)';
        body.style.transformOrigin = 'top left';
    } else if (width <= 600) {
        body.style.transform = 'scale(0.5)';
        body.style.transformOrigin = 'top left';
    } else {
        body.style.transform = 'none'; // Reset to default
    }
}

// Adjust page width on load and resize
window.addEventListener('load', adjustPageWidth);
window.addEventListener('resize', adjustPageWidth);