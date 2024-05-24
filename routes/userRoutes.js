const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  insertUser,
  getUserPosts,
} = require("../controllers/userController");
const { userBuyStocks, userSellStocks } = require("../controllers/transactionController");
const { addWatchlist } = require("../controllers/stockPriceContoller");

router.get("/getUsers", getAllUsers);
router.post("/insertUser", insertUser);
router.post("/buyStock", userBuyStocks);
router.post("/sellStock", userSellStocks);
router.post("/addWatchlist", addWatchlist);

module.exports = router;