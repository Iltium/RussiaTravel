const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // ваш email
        pass: 'your-email-password'   // ваш пароль от email
    }
});

app.post('/send-email', (req, res) => {
    const { trip, date, name, email, phone } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'destination-email@example.com', // email получателя
        subject: 'Новая заявка на тур',
        text: `Название поездки: ${trip}\nДата поездки: ${date}\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Ошибка при отправке email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email успешно отправлен');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
