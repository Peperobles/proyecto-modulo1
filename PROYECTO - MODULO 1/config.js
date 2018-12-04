
var mysql = require('mysql');
//Conecto a mysql con las credenciales y en la bbdd que quiera
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"bebeeco"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Necesario exportarlo
module.exports = con;