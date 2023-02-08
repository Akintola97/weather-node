const express = require("express");
const app = express();
const hostname  = "localhost";
const dotenv = require('dotenv');
require('dotenv').config();
const https = require('https')
const path = require('path')
const cors = require('cors')
var bodyParser = require('body-parser')
const port = process.env.PORT || 5050
// const api_router = require('./src/routes/weather')
const location_router = require('./src/routes/location')




app.set('views', './views')
app.set('view engine', 'ejs')


app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));





app.listen(port, hostname, () =>{
    console.log(`The server is running on ${hostname} ${port}`)
})

// app.use('/', api_router)
app.use('/', location_router)
