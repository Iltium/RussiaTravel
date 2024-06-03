document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const cardContainer = slider.querySelector('.baikal__mest__cards, .baikal__hotel__cards');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const cards = cardContainer.querySelectorAll('.baikal__mest__card, .baikal__hotel__card');

        let currentIndex = 0;
        const totalCards = cards.length;
        const cardsToShow = 3;
        const cardWidth = 310;
        const gap = 40; // Increased gap

        function updateSlider() {
            const offset = -(currentIndex * (cardWidth + gap));
            cardContainer.style.transform = `translateX(${offset}px)`;
        }

        function showNextSlide() {
            if (currentIndex < totalCards - cardsToShow) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }

        function showPrevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalCards - cardsToShow;
            }
            updateSlider();
        }

        nextBtn.addEventListener('click', showNextSlide);
        prevBtn.addEventListener('click', showPrevSlide);

        updateSlider();
    });
});

