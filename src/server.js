// server.js
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors()); // Add this line to enable CORS

app.post('/upload', upload.single('file'), (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '<your email>',
            pass: '<your email pass>',
        },
    });

    let mailOptions = {
        from: '<your email>',
        to: '<email you want to send to>',
        subject: 'File from React App',
        text: 'You have a new file',
        attachments: [
            {
                path: req.file.path,
            },
        ],
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent: ' + info.response);
        }
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
