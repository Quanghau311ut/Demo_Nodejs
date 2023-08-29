const path = require('path')
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const port = 3000

//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine','handlebars')
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('main')
})
app.get('/trang-chu', (req, res) => {
  res.render('home')
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})