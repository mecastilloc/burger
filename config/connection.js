// Require npm package
var mysql = require("mysql");

//Connection setings
var dbConnect = mysql.createConnection({
    host: "localhost",
    port: "3006",
    user: "root",
    password: "root",
    database: "burger_db",
});

//Init Db connection
dbConnect.connect(function (error) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = dbconnect;