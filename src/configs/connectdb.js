import mysql from "mysql2/promise"


//create the connect to database


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs-base'
})


export default pool