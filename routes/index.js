const router = require('express').Router();
const apiRoutes = require('./api');

// Use the '/api' prefix for all routes defined in the 'apiRoutes'
router.use('/api', apiRoutes);

// Default route handler for any other routes that are not defined
router.use((req, res) => {
  res.send("Error getting route!");
});

module.exports = router;