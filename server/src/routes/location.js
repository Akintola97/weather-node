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
            const name = weatherdata.name
            const country = weatherdata.sys.country
            const description = weatherdata.weather[0].description;
            const main = weatherdata.weather[0].main
            const icon = weatherdata.weather[0].icon
            const icon_url = `https://openweathermap.org/img/w/${icon}.png`
            const feels  = weatherdata.main.feels_like
            const humidity  = weatherdata.main.humidity
      

            res.render('weather', {location_name: name, location_country: country, location_description: description, location_main: main, weather_icon: icon_url, location_feels: feels , location_humidity: humidity, zipcode_location: zipcode
            })

console.log(weatherdata)
})



module.exports = location