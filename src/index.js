const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const PORT = 8080;
// Settings

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Middelwares

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'myscretetkey_session',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60 * 1000}
}))
// Routes
app.use(require('./routes/index'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})