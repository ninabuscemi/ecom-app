const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET all tags with associated products
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(TagDB => res.json(TagDB))
  .catch(err => {
    res.status(500).json(err);
  })
});

// GET a single tag by ID with associated products
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(TagDB => {
    if (!TagDB) {
      res.status(404).json(err)
    }
    res.json(TagDB)
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

// POST a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
  .then(TagDB => res.json(TagDB))
  .catch(err => {
    res.status(500).json(err);
  })
});

// PUT (update) an existing tag by ID
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(TagDB => {
    if (!TagDB) {
      res.status(404).json(err)
    }
    res.json(TagDB)
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

// DELETE a tag by ID
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(TagDB => {
    if (!TagDB) {
      res.status(404).json(err)
    }
    res.json(TagDB)
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

module.exports = router;