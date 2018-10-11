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

app.get('/cars', (req, res) => {
  let cars = [
    {name: "Bugatti", speed: "400 km/h", quickness: "really quick", look: "sporty coupe"},
    {name: "Audi", speed: "300 km/h", quickness: "kinda okish", look: "casual racer"},
    {name: "Mercedes", speed: "220 km/h", quickness: "not on point", look: "ugly", recommended: "nope", driver: "Hamilton"},
    {name: "Lotus", speed: "375 km/h", quickness: "pretty quick", look: "sporty beast"},
    {name: "Bentley", speed: "190 km/h", quickness: "not that speedy", look: "the king of town", price: "90k EUR"}
  ];
  res.send(shuffle(cars));
});

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}