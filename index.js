require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const routes = require('./Routes/router')


const dc_Server = express()
dc_Server.use(cors())
dc_Server.use(express.json())
dc_Server.use(routes)

const PORT = 3000 || process.env.PORT

dc_Server.listen(PORT, () => {
    console.log(`Daily  cart server started at ${PORT} and waiting for cilent  request !!!`);
})

dc_Server.get('/', (req, res) => {
    res.send(`<h2>Daily Cart server started ... and waiting  for client  request !!!!</h2>`)
})