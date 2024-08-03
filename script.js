/* mobile view hamburger*/
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');

    hamburgerMenu.addEventListener('click', () => {
        fullscreenMenu.classList.toggle('active');
    });
});


/* img scroll main page (index.html)*/ const images1 = [
            'https://i.postimg.cc/SxWnhGcL/pexels-filippo-bergamaschi-202684-2767739.jpg',
            'https://i.postimg.cc/yYxhs2Nm/pexels-pixelcop-1878293.jpg',
            'https://i.postimg.cc/sD5WjyrZ/pexels-tom-li-1943126-3567218.jpg'
        ];

        const images2 = [
            'https://i.postimg.cc/SxWnhGcL/pexels-filippo-bergamaschi-202684-2767739.jpg',
            'https://i.postimg.cc/yYxhs2Nm/pexels-pixelcop-1878293.jpg',
            'https://i.postimg.cc/sD5WjyrZ/pexels-tom-li-1943126-3567218.jpg'
        ];

        let currentImageIndex1 = 1;
        let currentImageIndex2 = 1;

        function showImage(index, section) {
            if (section === 1) {
                currentImageIndex1 = index;
                document.getElementById('mainImage1').src = images1[index];
                updateButtons(section);
            } else {
                currentImageIndex2 = index;
                document.getElementById('mainImage2').src = images2[index];
                updateButtons(section);
            }
        }

        function previousImage(section) {
            if (section === 1) {
                currentImageIndex1 = (currentImageIndex1 > 0) ? currentImageIndex1 - 1 : images1.length - 1;
                document.getElementById('mainImage1').src = images1[currentImageIndex1];
                updateButtons(section);
            } else {
                currentImageIndex2 = (currentImageIndex2 > 0) ? currentImageIndex2 - 1 : images2.length - 1;
                document.getElementById('mainImage2').src = images2[currentImageIndex2];
                updateButtons(section);
            }
        }

        function nextImage(section) {
            if (section === 1) {
                currentImageIndex1 = (currentImageIndex1 < images1.length - 1) ? currentImageIndex1 + 1 : 0;
                document.getElementById('mainImage1').src = images1[currentImageIndex1];
                updateButtons(section);
            } else {
                currentImageIndex2 = (currentImageIndex2 < images2.length - 1) ? currentImageIndex2 + 1 : 0;
                document.getElementById('mainImage2').src = images2[currentImageIndex2];
                updateButtons(section);
            }
        }

        