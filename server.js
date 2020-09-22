const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const db = require('./queries')
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


app.get('/api', (req, res) => {
  res.json({info: 'Node.js, Express, and Postgres API is connected!'})
});


app.get('/api/customers', db.getCustomers)









app.listen(port, () => {
  console.log(`App is running on port ${port}.`)
})