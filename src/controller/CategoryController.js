const CategoryModel = require('../database/models/CategoryModel');

class CategoryController {
  // create category
  async create(req, res) {
    try {
      await CategoryModel.create(req.body).then((response) => {
        return res.status(200).json(response);
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  // update category
  async update(req, res) {
    let category;
    try {
      category = await CategoryModel.findByPk(req.params.category_id);
    } catch (e) {
      return res.status(500).json(e);
    }

    category.set(req.body);

    try {
      await category.save().then((response) => {
        return res.status(200).json(response);
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  // delete category
  async delete(req, res) {
    try {
      await CategoryModel.destroy({
        where: [{ id: req.params.category_id }],
      }).then((response) => {
        return res.status(200).json(response);
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  // get category by id
  async getId(req, res) {
    try {
      await CategoryModel.findByPk(req.params.category_id).then((response) => {
        return res.status(200).json(response);
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

module.exports = new CategoryController();
