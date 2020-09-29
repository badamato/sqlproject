const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
// const { response } = require('express');
const app = express();
const db = require('./queries')
const port = 3000;

app.use(cors())

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//initial connect to backend
app.get('/api', (req, res) => {
  res.json({info: 'Node.js, Express, and Postgres API is connected!'})
});

//query for getting first 10 customers
app.get('/api/customers', db.getCustomers)






app.listen(port, () => {
  console.log(`App is running on port ${port}.`)
})