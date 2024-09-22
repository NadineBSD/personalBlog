const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

// const db = mysql.createConnection({
//     host: "bvlrvu7kqrejwuqms85n-mysql.services.clever-cloud.com",
//     user: 'ucbzu7ueu6mqloog',
//     password: 'p8ZMio3C4lbCO5mYswTs',
//     database: 'bvlrvu7kqrejwuqms85n'
// });


db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log("Connecting to database:", process.env.DB_NAME);
});

module.exports = db;
