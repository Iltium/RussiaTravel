document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.russia__img img');
    const modal = document.querySelector('.modale');
    const modalImg = document.querySelector('.modale__img');
    const modalClose = document.querySelector('.modale__close');
    const modalPrev = document.querySelector('.modale__prev');
    const modalNext = document.querySelector('.modale__next');
    const buttonEcho = document.querySelector('.button__echo');

    let currentIndex = 0;

    const newImages = [
        '../img/BeatifulRussia/kavkazkiy_zapovednik_46.jpg',
        '../img/BeatifulRussia/kavkazkiy_zapovednik_61.jpg',
        '../img/BeatifulRussia/kizhi_103.jpg',
        '../img/BeatifulRussia/krasnaya_ploshad_132.jpg',
        '../img/BeatifulRussia/krym_292.jpg',
        '../img/BeatifulRussia/lahta_centr_028.jpg',
        '../img/BeatifulRussia/laplandskiy_zapovednik_47.jpg',
        '../img/BeatifulRussia/laplandskiy_zapovednik_49.jpg',
        '../img/BeatifulRussia/moscow_city_86.jpg',
        '../img/BeatifulRussia/ostankinskaya_telebashnya_053.jpg',
        '../img/BeatifulRussia/petergof_147.jpg',
        '../img/BeatifulRussia/s1.jpg',
        '../img/BeatifulRussia/sarykum_021.jpg',
        '../img/BeatifulRussia/Syzran-5.jpg',
        '../img/BeatifulRussia/tzar_pushka_18.jpg',
        '../img/BeatifulRussia/zhuravlinaya_rodina_13.jpg',
        '../img/BeatifulRussia/zimniy_dvorets_48.jpg'
    ];

    function openModal(index) {
        currentIndex = index;
        modalImg.src = images[currentIndex].src;
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showPrevImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        modalImg.style.transform = 'scale(0.8)';
        setTimeout(() => {
            modalImg.src = images[currentIndex].src;
            modalImg.style.transform = 'scale(1)';
        }, 200);
    }

    function showNextImage() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        modalImg.style.transform = 'scale(0.8)';
        setTimeout(() => {
            modalImg.src = images[currentIndex].src;
            modalImg.style.transform = 'scale(1)';
        }, 200);
    }

    function addImageListeners() {
        images.forEach((img, index) => {
            img.addEventListener('click', () => openModal(index));
        });
    }

    addImageListeners();

    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', showPrevImage);
    modalNext.addEventListener('click', showNextImage);

    // Close the modal when clicking outside of the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Add images on "ещё" button click
    buttonEcho.addEventListener('click', function () {
        const numberOfNewImages = 3;
        if (newImages.length === 0) {
            buttonEcho.style.display = 'none'; // Hide the button if no more images to add
            return;
        }

        const imagesToAdd = newImages.splice(0, numberOfNewImages);

        imagesToAdd.forEach(src => {
            const newImg = document.createElement('img');
            newImg.src = src;
            newImg.alt = '';
            newImg.style.margin = '20px';
            newImg.style.cursor = 'pointer';
            newImg.style.transition = 'transform 0.3s';

            newImg.addEventListener('click', () => openModal(images.length));
            document.querySelector('.russia__img').appendChild(newImg);
        });

        // Update the images NodeList and add the event listener for new images
        images = document.querySelectorAll('.russia__img img');
        addImageListeners();
    });

    // Ensure modal is hidden initially
    closeModal();
});
