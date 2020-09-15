const mysql = require('promise-mysql');

const connection = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: 'Ounce'
}

module.exports = mysql.createPool(connection)