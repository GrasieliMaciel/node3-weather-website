const request = require('request')
const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3Jhc2llbGkiLCJhIjoiY2tuZ2Y1ajVnMGFycDJubnQxZ2JsMmxpdSJ9.gU5M0nVuhPlQ_uiYgjoMHA&limit=1'
// const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/naoexiste.json?access_token=pk.eyJ1IjoiZ3Jhc2llbGkiLCJhIjoiY2tuZ2Y1ajVnMGFycDJubnQxZ2JsMmxpdSJ9.gU5M0nVuhPlQ_uiYgjoMHA&limit=1'

// request({url: urlGeo, json: true}, (error, response) => {

//     if (error) {
//         console.log('Unable to connect MapBox Service');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find this location');
//     } else {
//         console.log(response.body.features[0].text + 
//             ". Lat " + response.body.features[0].center[1] + 
//             " Long " + response.body.features[0].center[0] )

         
//     }
// })

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZ3Jhc2llbGkiLCJhIjoiY2tuZ2Y1ajVnMGFycDJubnQxZ2JsMmxpdSJ9.gU5M0nVuhPlQ_uiYgjoMHA&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to conect ', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1] ,
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode