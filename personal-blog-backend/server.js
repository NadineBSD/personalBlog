const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

// app.get('/', (re, res) => {
//     return res.json("From Backend Side");
// })

// app.get('/designArray', (req, res) => {
//     const sql = "SELECT * FROM DESIGNARRAY"
//     db.query(sql, (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     })
// })

// app.get('/webDevArray', (req, res) => {
//     const sql = "SELECT * FROM WEBDEVARRAY"
//     db.query(sql, (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     })
// })

// app.get('/mobileDevArray', (req, res) => {
//     const sql = "SELECT * FROM MOBILEDEVARRAY"
//     db.query(sql, (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     })
// })

app.listen(8081, () => {
    console.log("listening");
})