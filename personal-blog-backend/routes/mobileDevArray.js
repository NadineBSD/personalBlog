const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost", // Update this later for production
    user: 'root',
    password: '',
    database: 'personal_blog'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

export default async function (req, res) {
    const sql = "SELECT * FROM MOBILEDEVARRAY";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
}
