const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  insertUser,
  getUserPosts,
  userProfile,
} = require("../controllers/userController");
const { userBuyStocks, userSellStocks } = require("../controllers/transactionController");
const { transactionValidation } = require("../validations/stockValidation");
const { validate } = require("../middlewares/validate");

router.get("/getUsers", getAllUsers);
router.post("/insertUser", insertUser);
router.post("/buyStock", transactionValidation(), validate, userBuyStocks);
router.post("/sellStock", transactionValidation(), validate, userSellStocks);
router.get("/profile/:id", userProfile);

module.exports = router;