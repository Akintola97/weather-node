const express = require('express');
const axios = require('axios')
const location = express.Router();
const apiId = process.env.API_KEY;


location.get('/', (req, res)=>{
    res.render('search')
})


location.post('/location', async(req, res) =>{
    const zipcode = req.body.zipcode;
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiId}&units=imperial`
    const weatherdata = await axios.get(baseUrl)
    .then((response => response.data))
    res.render('weather', {weather: weatherdata})
    // console.log(weatherdata)
    // weatherdata.weather.map((item)=>{
    //     // console.log(item.main)
    //     // if (item.main === 'Clouds'){
    //     //     document.getElementsByClassName('weather-body').style.backgroundImage = 'url("./images/weather-bg.jpg")';
    //     // }
    //   })
})



module.exports = location