const request = require('request')

//const urlWeather = 'http://api.weatherstack.com/current?access_key=9b18db31f6c5b001166ba31b7a61abb5&query=-19.96736635280333,-47.7812454879218&units=m'

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9b18db31f6c5b001166ba31b7a61abb5&query='+ latitude +','+ longitude +'&units=m'

    //request({url: urlWeather, json: true}, (error, response) => {
    request({url, json: true}, (error, {body}) => {//Since the properti have the same name as the objetc wen can use the property 'url' direct.
        if(error){
            callback('Unable to connect weater service!', undefined)
        }else if (body.error) {
            callback('Unable to find location', undefined)
        } else{
            // console.log(response.body.current.weather_descriptions[0] + ". It's currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
            callback(undefined, body.current.weather_descriptions[0] + ". It's currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out."
            //     {
            //     message: response.body.current.weather_descriptions[0] + ". It's currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.",
            //     weather_descriptions: response.body.current.weather_descriptions[0],
            //     temperature: response.body.current.temperature,
            //     termal_sense: response.body.current.feelslike
            //  }
             )
        }
    })
}

module.exports = forecast