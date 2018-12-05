
var con = require('./config');
var app = require('./app');

//RUTA PARA INDEX - INICIO
app.get('/', function (req, res) {
    res.render('index');
})
//RUTA PARA CLIENTES
app.get('/datosclientes', function (req, res) {
    res.render('datosclientes');
})

//RUTA PARA INFORMACION
app.get('/informacion', function (req, res) {
    res.render('informacion');
})
//RUTA PARA TARIFAS
app.get('/tarifas', function (req, res) {
    res.render('tarifas');
})
//RUTA PARA CONTACTO
app.get('/contacto', function (req, res) {
    res.render('contacto');
})

//INSERT EN BB.DD - Datos de clientes - CREATE

app.post('/clientes/add', function (req, res) {

    let sql = `INSERT INTO clientes (nombre, apellido, telefono, email, ciudad) VALUES ('${req.body.name}','${req.body.lastname}','${req.body.phone}','${req.body.email}','${req.body.city}')`;

    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let cliente = {
                //cuando se ejecuta un insert into en bb.dd, me devuelve varios parametros, y uno de ellos es el id, con el nombre de insertId
                id: result.insertId,
                nombre: req.body.name,
                apellido: req.body.lastname,
                telefono: req.body.phone,
                email: req.body.email,
                ciudad: req.body.city,

            }
            res.send(cliente);
        }
    });
});

// READ BB.DD - 
app.get('/clientes', function (req, res) {
    let sql = 'SELECT * from clientes';
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post('/clientes/update', function (req, res) {
    let sql = `UPDATE clientes set nombre='${req.body.name}' where idcliente = '${req.body.id}'`;

    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let cliente = {
                nombre: req.body.name,
                result: result
            }
            res.send(cliente);
        }
    });
});


//DELETE
//PARA ELIMINAR REGISTROS 
app.post('/clientes/delete', function (req, res) {
    let sql = `DELETE FROM clientes where idcliente = '${req.body.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});







//Exportar
module.exports = con;
module.exports = app;