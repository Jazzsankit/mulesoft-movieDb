const mysql = require('mysql');


// console.log("inn")

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movieDb'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    /*For creating DateBase*/
    // connection.query("CREATE DATABASE movieDb", function (err, result) {
    //     if (err) {
    //         console.log("database is already there")
    //     } else
    //         console.log("Database created");
    // });
});
/*For creating table*/
// var sql = "CREATE TABLE movie (id INT PRIMARY KEY,name varchar(255) actor VARCHAR(255), actress VARCHAR(255),director VARCHAR(255),year DATE)";
// connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
// });

module.exports = connection;