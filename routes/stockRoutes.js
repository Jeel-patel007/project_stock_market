const express = require("express");
const router = express.Router();
const { getAllStocks, getAllStockExchanges } = require("../controllers/stockController")

router.get("/getStocks", getAllStocks);
router.get("/getStockExchanges", getAllStockExchanges)

module.exports = router;
