function toggleMenu() {
    const menu = document.getElementById('left-menu');
    menu.classList.toggle('open');
}

// Resize handler to update page scaling based on window size
window.addEventListener('resize', adjustPageSize);
adjustPageSize();  // Initial page size adjustment on load

function adjustPageSize() {
    const width = window.innerWidth;

    if (width <= 600) {
        document.body.style.transform = 'scale(0.5)';
    } else if (width > 600 && width <= 700) {
        document.body.style.transform = 'scale(0.75)';
    } else if (width > 700 && width <= 767) {
        document.body.style.transform = 'scale(0.8)';
    } else if (width >= 992 && width <= 1600) {
        document.body.style.transform = 'scale(0.9)';
    } else {
        document.body.style.transform = 'scale(1)';
    }
}
