const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');
const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');


const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create); 

    app.listen(PORT , () => {
        console.log(`Server started on port ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'prashantvashisth1609@gmail.com',
        //     'This is a testing mail',
        //     'Hi, how are you we hope you will enjoy the journey.'
        // )
        jobs();
    })
}

setupAndStartServer();