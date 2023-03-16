import mysql2 from "mysql2"


//create the connect to database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs-base'
})


//simple query
//connection.query(
//'SELECT * FROM `table` WHERE   `name` = "Page" AND `age` > 45',
//    ' SELECT * FROM `users` ',

//   function (err, results, fields) {
//        console.log("=>>>> check mysql!!!")
//        console.log(results)
//        console.log(results[0])
//console.log(fields)
//    }
//)

export default connection