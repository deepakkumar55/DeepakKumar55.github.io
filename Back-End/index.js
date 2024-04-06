const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to the Express server');
}
)

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        }
    });

    const mailOptions = {
        from: "email",
        to: 'dk119819@gmail.com',
        subject: "subject",
        text: `Name: ${name} \n Email: ${email} \n Message: ${message}`
    };

    console.log('Sending email', mailOptions);

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.json({ status: 'success' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
