//const express = require("express")
import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoute from "./router/web"
import connection from "./configs/connectdb"
import initAPIRoute from  "./router/api"

require("dotenv").config()


const app = express()
const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended : true}))
app.use(express.json())

// setup  view engine
configViewEngine(app)

// init web route
initWebRoute(app)

//init API route
initAPIRoute(app)



app.listen(port, () => {
    console.log(`ok on port ${port}`)
})