const express = require('express');
const cors = require('cors');
const db = require('./db'); // Import centralized DB connection
const designArray = require('./routes/designArray');
const webDevArray = require('./routes/webDevArray');
const mobileDevArray = require('./routes/mobileDevArray');

const app = express();
app.use(cors());

// Routes
app.get('/designArray', designArray);
app.get('/webDevArray', webDevArray);
app.get('/mobileDevArray', mobileDevArray);

// Server listen
app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
