const express = require('express'),
    socketIO = require('socket.io'),
    path = require('path'),
    http = require('http')


const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')


const app = express()
const server = http.createServer(app)
const io = socketIO(server) 


app.use(express.static(publicPath))


io.on('connection', socket => {
    console.log('IO Connection.')

    socket.on('createMessage', (data) => {
        console.log(data)

        socket.emit('newMessage', {
            text: data.value,
            date: new Date()
        })
    })
    
}) 


server.listen(3000, () => {
    console.log(`Server has been started at port ${port}`)
})