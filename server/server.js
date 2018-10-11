const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const port = 9090;
app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

let counter = 0;
app.get('/counter', (req, res) => {
  counter += 1;
  res.send({'count': counter});
});
