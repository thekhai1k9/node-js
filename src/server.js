//const express = require("express")
import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoute from "./router/web"
import initAPIRoute from  "./router/api"

require("dotenv").config()

var morgan = require('morgan')

const app = express()
const port = process.env.PORT || 8080

app.use(morgan('combined'))

app.use(express.urlencoded({ extended : true}))
app.use(express.json())

// setup  view engine
configViewEngine(app)

// init web route
initWebRoute(app)

//init API route
initAPIRoute(app)

//handle 404

app.use((req, res) => {
    return res.render("404.ejs")
})



app.listen(port, () => {
    console.log(`ok on port ${port}`)
})