const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    res.status(200).json(await Category.findAll({
      include:Product
    }));
  } catch(err) {
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const result = await Category.findByPk(req.params.id, {
      include:Product
    });
    if(result) {
        res.status(200).json(result);
    } else {
        res.status(404).json('Category not found.');
    }
  } catch(err) {
      res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({category_name:req.body.category_name});
    res.status(201).json(categoryData);
  } catch (err) {
    if(!req.body.category_name) {
      res.status(400).json('Bad request - include category_name');
    } else {
      res.status(500).json(err);
    }
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryUpdate = await Category.update({ 
        category_name:req.body.category_name 
      },{
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(categoryUpdate);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryDelete = await Category.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(categoryDelete);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
