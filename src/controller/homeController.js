import connection from '../configs/connectdb'


let getHomePage = (req, res) => {


    let data = []

    connection.query(
        //'SELECT * FROM `table` WHERE   `name` = "Page" AND `age` > 45',
        ' SELECT * FROM `users` ',

        function (err, results, fields) {
            console.log("=>>>> check mysql!!!")
            console.log(results)
            console.log(results[0])
            data = results.map((row) => row)

        }
    )

    return res.render("index.ejs", { dataUser: JSON.stringify(data) })
}


module.exports = {
    getHomePage
}