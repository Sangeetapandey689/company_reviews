const express = require('express');
const mysql = require('mysql2');



const app = express();
const port = 3001;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Geeta@6204',
  database: 'company_reviews',
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Create a table (if it doesn't exist)
db.query(`
  CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    companyName VARCHAR(255) NOT NULL,
    pros TEXT NOT NULL,
    cons TEXT NOT NULL,
    rating INT NOT NULL
  );
`);

// Middleware for parsing JSON
app.use(express.json());

// Handle review submission
app.post('/submit-review', (req, res) => {
  const { companyName, pros, cons, rating } = req.body;
  const sql = 'INSERT INTO reviews (companyName, pros, cons, rating) VALUES (?, ?, ?, ?)';
  db.query(sql, [companyName, pros, cons, rating], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error submitting review');
    } else {
      res.status(200).send('Review submitted successfully');
    }
  });
});

// Handle review retrieval
app.get('/get-reviews', (req, res) => {
  const sql = 'SELECT * FROM reviews';
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving reviews');
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
