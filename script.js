/* mobile view hamburger*/
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');

    hamburgerMenu.addEventListener('click', () => {
        fullscreenMenu.classList.toggle('active');
    });
});


/* img scroll main page (index.html)*/
let currentImageIndex = 1;
        const images = [
            'https://i.postimg.cc/SxWnhGcL/pexels-filippo-bergamaschi-202684-2767739.jpg',
            'https://i.postimg.cc/sD5WjyrZ/pexels-tom-li-1943126-3567218.jpg',
            'https://i.postimg.cc/yYxhs2Nm/pexels-pixelcop-1878293.jpg'
        ];

        function showImage(index) {
            currentImageIndex = index;
            document.getElementById('mainImage').src = images[index];
            updateButtons();
        }

        function previousImage() {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
            document.getElementById('mainImage').src = images[currentImageIndex];
            updateButtons();
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
            document.getElementById('mainImage').src = images[currentImageIndex];
            updateButtons();
        }

        function updateButtons() {
            const buttons = document.querySelectorAll('.controls .button');
            buttons.forEach((button, index) => {
                if (index === currentImageIndex) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }