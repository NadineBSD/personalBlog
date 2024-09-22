const db = require('../db'); // Import centralized DB connection

module.exports = async function (req, res) {
    const sql = "SELECT * FROM designArray";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
};
