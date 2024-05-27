const express = require("express");

const {
  getAllUsers,
  insertUser,
  getUserPosts,
  userProfile,
  updateUser,
  addStockWatchlist,
  removeStockWatchlist,
} = require("../controllers/userController");
const { userBuyStocks, userSellStocks } = require("../controllers/transactionController");
const { transactionValidation } = require("../validations/stockValidation");
const { validate } = require("../middlewares/validate");
const { userValidate } = require("../validations/userValidation");

const router = express.Router()

router.post("/insertUser", userValidate(), validate, insertUser);
router.post("/updateUser", userValidate(), validate, updateUser);
router.get("/getUsers", getAllUsers);
router.get("/profile/:id", userProfile);
router.post("/buyStock", transactionValidation(), validate, userBuyStocks);
router.post("/sellStock", transactionValidation(), validate, userSellStocks);
router.post("/addWatchlist", addStockWatchlist);
router.get("/removeStockWatchlist/:id", removeStockWatchlist)

module.exports = router;