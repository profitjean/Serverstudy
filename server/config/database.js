const mysql = require('promise-mysql');

const connection = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'y4121jlee',
    database: 'yoon'
}

module.exports = mysql.createPool(connection)