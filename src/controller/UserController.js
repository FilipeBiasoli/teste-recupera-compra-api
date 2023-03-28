const { Op } = require('sequelize');
const UserModel = require('../database/models/UserModel');

class UserController {
  // create user
  async create(req, res) {
    try {
      await UserModel.create(req.body).then((response) => {
        return res.status(200).json(response);
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  // update user
  async update(req, res) {
    let user;
    try {
      user = await UserModel.findByPk(req.params.user_id);
    } catch (e) {
      return res.status(500).json(e);
    }

    user.set(req.body);

    try {
      await user.save().then((response) => {
        return res.status(200).json(response);
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  // delete user
  async delete(req, res) {
    try {
      await UserModel.destroy({
        where: [{ id: req.params.user_id }],
      }).then((response) => {
        return res.status(200).json(response);
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  // get user by id
  async getId(req, res) {
    try {
      await UserModel.findByPk(req.params.user_id).then((response) => {
        return res.status(200).json(response);
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  // get user by search
  async search(req, res) {
    try {
      await UserModel.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: `%${req.params.search}%`,
              },
            },
            {
              email: {
                [Op.like]: `%${req.params.search}%`,
              },
            },
          ],
        },
      }).then((response) => {
        return res.status(200).json(response);
      });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

module.exports = new UserController();
