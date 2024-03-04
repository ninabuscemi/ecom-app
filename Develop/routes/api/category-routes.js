const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Gets all categories with associated products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    });

    if (!categoryData || categoryData.length === 0) {
      return res.status(404).json({ message: 'No categories found' });
    }

    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Gets one category by id with associated products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: { id: req.params.id },
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    });

    if (!categoryData) {
      return res.status(404).json({ message: 'No category found with this id' });
    }

    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Creates a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });
    
    rest.json(categoryData);
   } catch (err) {
    console.error(err);
    res.status(500).json(err);
   }
});

// Creates a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });

    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
