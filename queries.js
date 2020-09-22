const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'Password1!',
  port: 5432
})

const getCustomers = (req, res) => {
  pool.query('SELECT * FROM customer ORDER BY customer_id ASC LIMIT 10', (err, results) => {
    if (err) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getCustomers
}