require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeecontroler = require('./controllers/employeecontroler');
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname, '/views/'));
app.engine('hbs',exphbs({extname: 'hbs', defaultlayout: 'mainlayout', layoutsDir: __dirname +'/views/layouts'}));
app.set('view engine', 'hbs');

app.listen(8080, () => {
    console.log('server start at port 3000:')
});
app.use('/employee',employeecontroler);