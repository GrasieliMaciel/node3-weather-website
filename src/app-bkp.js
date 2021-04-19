const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public');

//'use' - Customize your server
app.use(express.static(publicDirectoryPath))

// //This block of code no long works, since de code above already show a index.html in the root rout
// app.get('', (req, res) => {
//     //This is what we will send back to request
//     res.send('<h1>Hello Express!</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send([
//         {
//             name: "Grasi",
//             age: 27
//         },
//         {
//             name: "Test",
//             age: 50
//         }
//     ])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About: My firts app in node.js</h1>')
// })

// app.get('/weather', (req, res) => {
//     res.send("Weather Today")
// })

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})