//const express = require("express")
import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoute from "./router/web"
import connection from "./configs/connectdb"

require("dotenv").config()


const app = express()
const port = process.env.PORT || 8080

// setup  view engine
configViewEngine(app)

// init web route
initWebRoute(app)



app.listen(port, () => {
    console.log(`ok on port ${port}`)
})