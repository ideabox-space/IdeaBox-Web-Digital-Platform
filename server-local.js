require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./src/database/db');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});