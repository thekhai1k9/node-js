import pool from '../configs/connectdb'


let getHomePage = async (req, res) => {

    const [rows, fields] = await pool.execute("SELECT * FROM users")
    
    return res.render("index.ejs", { dataUser: rows }) 
}

let getDetailPage = async (req, res) => {

    let userId = req.params.id

    let [user] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [userId])
    //console.log("check params >>>", req.params)
    return res.send(JSON.stringify(user))
}

module.exports = {
    getHomePage, getDetailPage
}