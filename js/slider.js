document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelector('.info__rus__cards');
    const cardCount = document.querySelectorAll('.info__rus__card').length;
    let cardWidth = document.querySelector('.info__rus__card').offsetWidth;
    let currentIndex = 0;

    function updateSliderPosition() {
        cards.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }

    document.querySelector('.slider__info__left').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cardCount - 1;
        updateSliderPosition();
    });

    document.querySelector('.slider__info__right').addEventListener('click', function () {
        currentIndex = (currentIndex < cardCount - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    });

    window.addEventListener('resize', function () {
        cardWidth = document.querySelector('.info__rus__card').offsetWidth;
        updateSliderPosition();
    });
});


