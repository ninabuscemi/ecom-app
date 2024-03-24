const router = require('express').Router();
const { Category, Product } = require('../../models');

// Route to get all categories and their associated products
router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(CategoryDB => res.json(CategoryDB))
  .catch(err => {
    res.status(500).json(err);
  });
});

// Route to get a specific category by its id and its associated products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(CategoryDB => {
    if (!CategoryDB) {
      res.status(404).json(err);
      return;
    }
    res.json(CategoryDB);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// Route to create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(CategoryDB => res.json(CategoryDB))
  .catch(err => {
    res.status(500).json(err);
  });
});

// Route to update a category by its id
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(CategoryDB => {
    if (!CategoryDB) {
      res.status(404).json(err);
      return;
    }
    res.json(CategoryDB);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// Route to delete a category by its id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(CategoryDB => {
    if (!CategoryDB) {
      res.status(404).json(err);
      return;
    }
    res.json(CategoryDB);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;
