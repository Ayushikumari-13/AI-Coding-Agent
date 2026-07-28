const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Database Configuration
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to the database.");
})
.catch(err => {
    console.error("Could not connect to the database.", err);
    process.exit();
});

// Default Route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
    });
});

// Notes Routes
require('./app/routes/note.routes')(app);

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});