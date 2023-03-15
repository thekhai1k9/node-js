const http = require("http")


const server = http.createServer((req, res) => {
    res.setHeader("Content type ", "text/html")
    res.write('<h3>ALo 1234</h3>')
    res.write('<h2>from 6789 alo</h2>')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log("Node js Server run!")
})