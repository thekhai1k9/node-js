import pool from '../configs/connectdb'
import multer from 'multer'
import path from 'path'

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


let createNewUser =  async (req, res)  => {
    console.log("check req>>>, ", req.body)
    
    let {firstName, lastName, email ,address} = req.body
    
    await pool.execute('INSERT INTO users(firstName, lastName, email, address) VALUES(?, ?, ?, ?)', [firstName, lastName, email, address])
    
    return res.redirect('/')
}

let deleteUser = async (req, res) => {

    let userId = req.body.userId

    await pool.execute('DELETE FROM users where id = ?', [userId])
    return res.send(`del user sucsses ${req.body.userId}`)
}

let getEditPage = async (req, res) => {

    let id = req.params.id
    let [user] = await pool.execute('SELECT * FROM users WHERE id = ?', [id])

    return res.render("update.ejs", {dataUser: user[0]}) /// x <- y
}

let updateUser = async  (req, res) => {

    let {firstName, lastName, email ,address, id} = req.body
    await pool.execute('UPDATE users SET  firstName=?, lastName=?, email=?, address=? WHERE id = ?', [firstName, lastName, email, address, id])
    console.log("check update request==", req.body)
    return res.redirect('/')
}

//upload file done

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    },

    //by default , multer remove file extensions so let's add them back

    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let uploadFile =  async (req, res) => {
    return res.render("uploadFile.ejs")
}


let handleUploadFile = async (req, res) => {
    let upload = multer({ storage: storage, fileFilter: helper.imageFilter}).single('profile-pic')


    upload(req, res, function(err) {
        if (req.fileValidationErrr) {
            return res.send(req.fileValidationError)
        }
        else if (!req.file) {
            return res.send("Please select an img to upload!!")
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err)
        }
        else if (err){
            return res.send(err)
        }
    })
}

module.exports = {
    getHomePage, getDetailPage, createNewUser, deleteUser, getEditPage, updateUser, uploadFile, handleUploadFile
}