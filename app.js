const express = require('express');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const companyReviewRoutes = require('./routes/companyReviewRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Sync Sequelize with the database
sequelize.sync()
  .then(() => {
    console.log('Database is synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', companyReviewRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
