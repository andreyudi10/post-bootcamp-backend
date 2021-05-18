const require = require('request')
require('dotenv').config()

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.APIKEY}8&query=` + latitude + ',' + longitude + '&units=m';

    request({url, json: true }, (err, { body }) => {
        // blas ga konek
        if(err) {
            callback('Unable to connect weather service!', undefined)
        } 
        // konek tapi balikan bodynya kosong
        else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.');
        }
    })

}
console.log(forecast(10,10))
module.exports = forecast;