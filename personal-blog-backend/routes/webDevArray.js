// const db = require('../db'); // Import centralized DB connection

// module.exports = async function (req, res) {
//     const sql = "SELECT * FROM `webDevArray`";
//     db.query(sql, (err, data) => {
//         if (err) return res.status(500).json(err);
//         return res.json(data);
//     });
// };

const express = require('express');
const router = express.Router();
const pool = require('../db'); // Import centralized DB connection

// Route to get designArray data
router.get('/', (req, res) => {
    pool.query('SELECT * FROM `webDevArray`', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Export the router
module.exports = router;
