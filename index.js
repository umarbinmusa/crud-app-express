var express = require('express');

var app = express();
app.set('view engine','ejs');
app.use('/assets', express.static('assets'));
 
app.get('/www.umarbinmusa.com', function(req,res){
   res.render('index');
});
app.get('/user', function(req,res){
    res.render(__dirname +'userlogin');
 });
app.get('/mission', function(req,res){
    res.render('help');
});

app.get('/profile/:name', function(req,res){
    var data = {age: 20, job: 'programer', sex: 'male'};
    res.render('profile',  {person:  req.params.name, data: data});
});

app.listen(3000);
console.log('server start at port 3000')