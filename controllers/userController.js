const { generalResponse } = require("../helpers/responceHandler");
const { getUsers, getUserWithPosts } = require("../repository/userRepository");

async function getAllUsers(req, res) {
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

async function insertUser(req, res) {
  try {
    const currentTime = new Date().toISOString();
    const { firstName, lastName, email } = req.body;
    // don't pass this custom TimeStamps to database this way - add NOW() in default and updatedAt should be null while inserting data.
    const newUser = await createUser({
      firstName,
      lastName,
      email,
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

async function getUserPosts(req, res) {
  try {
    const userId = req.query.id;
    const userPosts = await getUserWithPosts(userId);
    return generalResponse(res, userPosts, "User posts fetched.", true);
  } catch (error) {
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}
module.exports = {
  getAllUsers,
  insertUser,
  getUserPosts,
};
