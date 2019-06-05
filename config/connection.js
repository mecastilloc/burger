// Require npm package
var mysql = require("mysql");

//Connection setings
var dbConnect;

if(process.env.JAWSDB_URL){
dbConnect=mysql.createConnection(process.env.JAWSDB_URL)
 }else {
    dbConnect
    = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "burgers_db",
    });
 }

//Init Db connection
dbConnect.connect(function (error) {
    if (error) {
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("connected as id " + dbConnect.threadId);
});

// Export connection for our ORM to use.
module.exports = dbConnect;