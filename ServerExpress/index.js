const express = require('express');
var morgan = require('morgan')
const app = express()
const port = process.env.PORT||3000;
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})