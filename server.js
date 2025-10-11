require('dotenv').config();
const express = require('express');
const connectDB = require('./src/database/db');
const userRoutes = require('./src/routes/userRoutes');
const path = require('path');

const app = express();
const port = 3000;

// Connect to the database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'src/public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Routes
app.use('/', userRoutes);

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is started at port ${port}`);
    }
});