const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attribute: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(TagDB => res.json(TagDB))
  .catch(err => {
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [
    {
      model: Product,
      attribute: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  ]
  })
  .then(TagDB => {
    if(!TagDB) {
      res.status(404).json(err)
    }
    res.json(TagDB)
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  Tag.create ({
    tag_name: req.body.tag_name,
  })
  .then(TagDB => res.json(TagDB))
  .catch(err => {
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(TagDB => {
    if(!TagDB) {
      res.status(404).json(err)
    }
    res.json(TagDB)
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy ({
    where: {
      id: req.params.id
    }
  })
  .then(TagDB => {
    if(!TagDB) {
      res.status(404).json(err)
    }
    res.json(TagDB)
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

module.exports = router;