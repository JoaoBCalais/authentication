var express = require('express'); 
var bodyParser = require('body-parser'); 
var app = express();

app.use(bodyParser.json());

var user = [
    {
        "id": 1,
        "username": "joaobcalais",
        "password": "password123"
    },
    {
        "id": 2,
        "username": "duduhbsilva",
        "password": "passaword123"
    },
];

app.get('/v1/public/users', function(req, res){
    var found = false;
    for(var i = 0; i < user.length; i++){
        if(user[i].username == req.body.username && user[i].password == req.body.password){
            found = true;
            break;
        }
    }
    res.status(200).send(found);
});

app.listen(8083, function() {
	console.log('Servidor rodando na porta 8083.');
});
