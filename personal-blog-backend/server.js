// const express = require('express');
// const cors = require('cors');
// const db = require('./db'); // Import centralized DB connection
// const designArray = require('./routes/designArray');
// const webDevArray = require('./routes/webDevArray');
// const mobileDevArray = require('./routes/mobileDevArray');

// const app = express();
// app.use(cors());

// // Routes
// app.get('/designArray', designArray);
// app.get('/webDevArray', webDevArray);
// app.get('/mobileDevArray', mobileDevArray);

// // Server listen
// app.listen(8081, () => {
//     console.log("Server is running on port 8081");
// });

const express = require('express');
const cors = require('cors');
const designArrayRouter = require('./routes/designArray'); // Adjust the path as needed
const webDevArrayRouter = require('./routes/webDevArray'); // Adjust the path as needed
const mobileDevArrayRouter = require('./routes/mobileDevArray'); // Adjust the path as needed

const app = express();
app.use(cors());
// app.use(cors({
//   origin: '*', // Allow all origins, or specify your frontend URL for tighter security
//   credentials: true, // Allow cookies or authorization headers
// }));

// app.use(express.json());
// Prefix your API routes
app.use('/api/designArray', designArrayRouter);
app.use('/api/webDevArray', webDevArrayRouter);
app.use('/api/mobileDevArray', mobileDevArrayRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
