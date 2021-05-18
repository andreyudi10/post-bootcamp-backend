const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000;

app.get('/', ( req, res ) => {
    res.send(`hello world ganti kata ${process.env.PORT}`)
})

app.listen( port, () => {
    console.log(`server start at ${port}`)
})

// app.get('/forecast', ( req, res ) => {
//     res.send()
// })