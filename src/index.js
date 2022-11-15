const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', function (req, res) {
    res.render('home')
})
app.listen(port, function() {
    console.log('F')
})