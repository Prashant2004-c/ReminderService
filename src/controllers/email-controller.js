const EmailService = require('../services/email-service');

const sendMail = async (req, res) => {
    try {
        console.log(req.body);
        const { mailFrom, mailTo, mailSubject, mailBody } = req.body;
        const result = await EmailService.sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody );
        res.status(200).json({
            message: 'Email sent successfully',
            data: result,
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error sending email',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {
    sendMail
}