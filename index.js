var express = require('express');
var bodyParser = require('body-parser');

var usersCtrl = require('./controllers/users_controller');

var app = express();

app.use(bodyParser.json());

app.get('/users', usersCtrl.index);
app.get('/users/:id', usersCtrl.show);
app.post('/users', usersCtrl.create)
app.put('/users/:id', usersCtrl.update);
app.delete('/users/:id', usersCtrl.destroy);

var port = 3000;
app.listen(port, function() {
    console.log('listening to port ', port);
});



