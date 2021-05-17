const express = require('express')

app = express()

port = process.env.port || 3000;

app.get('/', ( req, res ) => {
    res.send('hello world')
})

app.listen( port, () => {
    console.log(`server start at ${port}`)
})