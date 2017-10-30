// Bring in our required modules
const express    = require('express');;
const { json }   = require('body-parser');
const session    = require('express-session');
const massive    = require('massive');
const passport   = require('passport');
const bcrypt     = require('bcrypt-nodejs');
const dotenv     = require('dotenv');
const { Client } = require('pg');

require('dotenv').load();

// App Declaration
const app = express();
const router = express.Router();
app.use('/api', router);

app.use(json());

app.use(express.static(`${__dirname}/../client/public`));

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true 
}));

require('./passport')(passport); 

// setting up passport
app.use(passport.initialize());
app.use(passport.session());


const massiveConnection = massive(process.env.DATABASE_URL)
    .then(db => { app.set('db',db); })
    .catch(err => { console.log(err) })



// Route files, grouped by primary database table
const userCtrl = require ('./routes/userCtrl')
const emplCtrl = require ('./routes/emplCtrl')
const carsCtrl = require ('./routes/carsCtrl')

// User Endpoints
app.get('/api/user', userCtrl.getUser)

// Employee Endpoints
app.get('/api/empl', emplCtrl.getEmpl)

// Car Endpoints
app.get('/api/cars', carsCtrl.getCars)

// Authentication
app.post('/auth/login',
passport.authenticate('local'), (req, res) => {    //{ successRedirect: '/' }
    console.log('res status', res.status)
    res.status(200).json(req.user);
});

// Check if logged in
app.get('/auth/me', (req, res) => {
    if (!req.user) return res.status(401).json({err: 'User Not Authenticated'});
    res.status(200).json(req.user);
});

// remove user from session
app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});




// listen on port
app.listen(process.env.PORT, ()=> {
    console.log(`LISTENING ON PORT: ${process.env.PORT}`);
});