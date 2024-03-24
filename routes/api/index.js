const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Use the '/categories' prefix for all routes defined in the 'categoryRoutes'
router.use('/categories', categoryRoutes);

// Use the '/products' prefix for all routes defined in the 'productRoutes'
router.use('/products', productRoutes);

// Use the '/tags' prefix for all routes defined in the 'tagRoutes'
router.use('/tags', tagRoutes);

module.exports = router;