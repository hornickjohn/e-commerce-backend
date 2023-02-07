const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    res.status(200).json(await Tag.findAll({
      include:Product
    }));
  } catch(err) {
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const result = await Tag.findByPk(req.params.id, {
      include:Product
    });
    if(result) {
        res.status(200).json(result);
    } else {
        res.status(404).json('Tag not found.');
    }
  } catch(err) {
      res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({tag_name:req.body.tag_name});
    res.status(201).json(tagData);
  } catch (err) {
    if(!req.body.tag_name) {
      res.status(400).json('Bad request - include tag_name');
    } else {
      res.status(500).json(err);
    }
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagUpdate = await Tag.update({ 
        tag_name:req.body.tag_name 
      },{
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(tagUpdate);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagDelete = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(tagDelete);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
