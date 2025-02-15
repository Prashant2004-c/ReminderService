const nodemailer = require('nodemailer');

const { email_id , email_password } = require('./serverConfig');

const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: email_id,
        pass: email_password
    }
});

module.exports = sender;