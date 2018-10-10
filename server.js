const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}))

const products = {
  1: {
    id: 1,
    name: 'Macbook',
    price: '$2400'
  },
  2: {
    id: 2,
    name: 'iPhone',
    price: '$800'
  },
  3: {
    id: 3,
    name: 'iPad',
    price: '$900'
  }
}

var nextProductId = 4

app.get('/products', (req, res) => {
  // 1. It converts object to JSON
  // 2. It sets the content-type header to be 'application/json'
  // 3. Sends response
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = {
    id: nextProductId,
    name: req.body.name,
    price: req.body.price
  }
  products[nextProductId] = newProduct;
  nextProductId += 1;
  res.status(201).send();
});

var port = 3000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})