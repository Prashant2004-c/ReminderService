const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    email_id: process.env.email_id,
    email_password: process.env.email_pass
}