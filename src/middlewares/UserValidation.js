class UserValidation {
  // validation to create user
  async create(req, res, next) {
    next();
  }

  // validation to update user
  async update(req, res, next) {
    next();
  }

  // validation to delete user
  async delete(req, res, next) {
    next();
  }

  // validation to get user by id
  async getId(req, res, next) {
    next();
  }
}

module.exports = new UserValidation();
