import express from "express"
import APIController from "../controller/APIController"

let router = express.Router()

const initApiRoute = (app) => {
    router.get('/users', APIController.getAllUsers) //method  GET => Read

    router.post('/create-user', APIController.createNewUser) //method POST => Create

    router.put('/update-user', APIController.updateUser) // method PUT => Update

    router.delete('/delete-user/:id', APIController.deleteUser) // method DEL => Delete

    return app.use('/api/v1', router)
}

export default initApiRoute