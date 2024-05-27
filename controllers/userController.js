const { generalResponse } = require("../helpers/responceHandler");
const db = require("../models");
const { getUsers } = require("../repository/userRepository");

const { user, user_has_stock, stock_prices } = db

const getAllUsers = async (req, res) => {
  try {
    /**
     * getUsers is a repository here - in repository you can write functions which interacts with different services
    such as DB, S3 and other external services and you may use it throughout your application in any controller you want. 
     */
    const users = await getUsers();
    return generalResponse(res, users, "Users Retrieved!", true);
  } catch (error) {
    console.error("Error fetching users:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

const insertUser = async (req, res) => {
  try {
    const currentTime = new Date().toISOString();
    const { firstName, lastName, email, roleId } = req.body;
    // don't pass this custom TimeStamps to database this way - add NOW() in default and updatedAt should be null while inserting data.
    const newUser = await user.create({
      'firstname': firstName,
      'lastname': lastName,
      email,
      'role_id': roleId,
      createdAt: currentTime,
      updatedAt: currentTime,
    });
    return generalResponse(
      res,
      newUser,
      "Inserted New User Successfully!",
      true
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

const updateUser = async (req, res) => {
  try {
    const { userId, firstName, lastName, email } = req.body;
    const result = await user.update({
      'firstname': firstName,
      'lastname': lastName,
      'email': email
    }, {
      where: {
        'id': userId
      }
    });
    return generalResponse(res, result, "User updated.", true);
  } catch (error) {
    console.log(error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while updating user!",
      "error",
      true
    )
  }
}

const userProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    let result = await user.findOne({
      where: {
        'id': userId
      }
    });
    if (result == null) {
      throw new Error("user does not exist");
    }
    result = await user.findAll({
      include: {
        model: stock_prices,
        through: {
          model: user_has_stock
        }
      },
      require: true,
      where: {
        'id': userId
      },
    });
    return generalResponse(res, result, "profile fetched", true);
  } catch (error) {
    console.log("Error while loading user profile", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching profile",
      "error",
      true
    );
  }
}

module.exports = {
  getAllUsers,
  insertUser,
  userProfile,
  updateUser
};
