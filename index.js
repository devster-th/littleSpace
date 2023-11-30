const express = require('express')
const app = express()
const port = 3000
var qs = require('qs')
const querystring = require('node:querystring');

//set
app.use(express.static('website'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.set('query parser','simple')



/*
app.get('/', (req, res) => {
  res.send(1000)
})
*/

app.get('/fill-skill', (req,res) => {
  console.log(req.query)
  res.send(req.query)
})

app.get('/find-skill', (req,res) => {
  console.log(req.query)
  res.send(req.query)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
