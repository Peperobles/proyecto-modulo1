//PARA EL SERVIDOR
var express = require('express');
var bodyParser = require('body-parser');
const port = 3000;

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/public/views');

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.listen(port, () =>{
    console.log('Servidor corriendo correctamente');
})

module.exports = app;