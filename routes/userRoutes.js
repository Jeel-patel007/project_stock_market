const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  insertUser,
  getUserPosts,
} = require("../controllers/userController");

router.get("/get-users", getAllUsers);
router.post("/insert-user", insertUser);


module.exports = router;
