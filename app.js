const express = require('express')
const app = express()

app.use('/', express.static('src'))

// app.get('/', function (req, res) {
//     res.sendFile('index.html')
// } )

app.listen(3000, () => {
    console.log(``)
    console.log(`Please visit localhost:3000/ in your browser`)
    console.log(``)
})