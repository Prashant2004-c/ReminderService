const express = require('express');

const  EmailController  = require('../../controllers/email-controller');


const router = express.Router();

router.post('/mails', EmailController.sendMail);

module.exports = router;