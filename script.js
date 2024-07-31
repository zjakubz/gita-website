document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');

    hamburgerMenu.addEventListener('click', () => {
        fullscreenMenu.classList.toggle('active');
    });
});
