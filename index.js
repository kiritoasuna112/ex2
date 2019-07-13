const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Potsawat Khunkum'))
app.get('/about', (req, res) => res.send('หน้า about'))
app.get('/contact', (req, res) => res.send('หน้า contact'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
