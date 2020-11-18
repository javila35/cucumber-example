const express = require('express')
const app = express()

app.use('/', express.static('src'))

app.listen(3000, () => {
    console.log(``)
    console.log(`Please visit localhost:3000/ in your browser`)
    console.log(``)
})