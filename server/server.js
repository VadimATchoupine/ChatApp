const express = require('express'),
    path = require('path')


const app = express()
const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

app.listen(3000, () => {
    console.log(`Server has been started at port ${port}`)
})

