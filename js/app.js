document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider__num');
    const header = document.querySelector('.header');
    const poloskis = document.querySelectorAll('.intro__poloska');
    const introLeft = document.querySelector('.intro__left');
    const initialSlideNumber = 1; // Начальный слайд
    let currentSlideNumber = initialSlideNumber; // Текущий слайд
    let isHeaderVisible = true; // Видимость header

    const slideTexts = [
        'Visit <br> tо <br> Russia', // Текст для слайда 1
        'Добро пожаловать <br> в <br> Россию', // Текст для слайда 2
        'Рәхим <br> итегез <br> Роccияга' // Текст для слайда 3
    ];

    // Инициализация начального состояния
    updateActiveSlide(initialSlideNumber);
    updateHeaderBackground(initialSlideNumber);
    updateIntroText(initialSlideNumber);

    slides.forEach(slide => {
        slide.addEventListener('click', function () {
            const slideNumber = this.getAttribute('data-slide');
            currentSlideNumber = parseInt(slideNumber);
            updateActiveSlide(slideNumber);
            updateHeaderBackground(slideNumber);
            updateIntroText(slideNumber);
        });
    });

    // Использование IntersectionObserver для наблюдения за видимостью header
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            isHeaderVisible = entry.isIntersecting;
        });
    }, { threshold: [0] });

    observer.observe(header);

    // Функция для автоматического переключения слайдов
    function autoSwitchSlides() {
        if (isHeaderVisible) {
            currentSlideNumber = currentSlideNumber < slides.length ? currentSlideNumber + 1 : 1;
            updateActiveSlide(currentSlideNumber);
            updateHeaderBackground(currentSlideNumber);
            updateIntroText(currentSlideNumber);
        }
    }

    // Запуск автоматического переключения слайдов каждые 3 секунды
    setInterval(autoSwitchSlides, 3000);

    function updateActiveSlide(slideNumber) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        document.querySelector(`.slider__num[data-slide="${slideNumber}"]`).classList.add('active');

        poloskis.forEach((poloska, index) => {
            if (index < slideNumber) {
                poloska.classList.add('active__pol');
            } else {
                poloska.classList.remove('active__pol');
            }
        });
    }

    function updateHeaderBackground(slideNumber) {
        header.className = 'header'; // Убираем все классы фона
        header.classList.add(`bg-${slideNumber}`); // Добавляем новый класс фона
    }

    function updateIntroText(slideNumber) {
        introLeft.classList.add('hidden');
        setTimeout(() => {
            introLeft.innerHTML = slideTexts[slideNumber - 1];
            introLeft.classList.remove('hidden');
        }); // Длительность совпадает с transition-duration в CSS
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const registerModal = document.getElementById('registerModal');
    const loginModal = document.getElementById('loginModal');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const openRegisterModalBtn = document.getElementById('openRegisterModal');
    const closeBtns = document.querySelectorAll('.close');

    // Открытие модального окна регистрации
    openRegisterModalBtn.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    // Закрытие модальных окон
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            registerModal.style.display = 'none';
            loginModal.style.display = 'none';
            forgotPasswordModal.style.display = 'none';
        });
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        } else if (event.target == loginModal) {
            loginModal.style.display = 'none';
        } else if (event.target == forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });

    // Переход к окну входа после регистрации
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Остановить отправку формы для демонстрации
        // В этом месте можно добавить функционал отправки данных регистрации на сервер
        window.location.href = 'page/lich.html'; // Переход на страницу личного кабинета
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Остановить отправку формы для демонстрации
        // В этом месте можно добавить функционал проверки данных входа на сервере
        window.location.href = 'page/lich.html'; // Переход на страницу личного кабинета
    });

    // Переход между регистрацией и входом
    document.getElementById('switchToLogin').addEventListener('click', function(event) {
        event.preventDefault();
        registerModal.style.display = 'none';
        loginModal.style.display = 'block';
    });

    document.getElementById('switchToRegister').addEventListener('click', function(event) {
        event.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });

    // Открытие модального окна забытого пароля
    document.getElementById('openForgotPasswordModal').addEventListener('click', function(event) {
        event.preventDefault();
        loginModal.style.display = 'none';
        forgotPasswordModal.style.display = 'block';
    });

    // Отправка формы восстановления пароля
    document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Остановить отправку формы для демонстрации
        // В этом месте можно добавить функционал отправки данных восстановления пароля на сервер
        alert('Инструкция по восстановлению пароля отправлена на ваш email');
        forgotPasswordModal.style.display = 'none';
    });
});

