document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            trip: formData.get('trip'),
            date: formData.get('date'),
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };

        fetch('https://your-server-endpoint/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert('Ваш тур успешно забронирован!');
            form.reset();
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при бронировании тура.');
        });
    });
});
