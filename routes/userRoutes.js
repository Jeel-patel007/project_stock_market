const express = require("express");

const {
  getAllUsers,
  insertUser,
  getUserPosts,
  userProfile,
  updateUser,
} = require("../controllers/userController");
const { userBuyStocks, userSellStocks } = require("../controllers/transactionController");
const { transactionValidation } = require("../validations/stockValidation");
const { validate } = require("../middlewares/validate");
const { userValidate } = require("../validations/userValidation");

const router = express.Router()

router.get("/getUsers", getAllUsers);
router.post("/insertUser", userValidate(), validate, insertUser);
router.post("/updateUser", userValidate(), validate, updateUser);
router.post("/buyStock", transactionValidation(), validate, userBuyStocks);
router.post("/sellStock", transactionValidation(), validate, userSellStocks);
router.get("/profile/:id", userProfile);

module.exports = router;