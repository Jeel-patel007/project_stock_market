const express = require("express");
const router = express.Router();
const { getAllStocks, getAllStockExchanges, addStock, updateStock, deleteStock } = require("../controllers/stockController")

router.get("/getStocks", getAllStocks);
router.get("/getStockExchanges", getAllStockExchanges);
router.post("/addStock", addStock);
router.post("/updateStock", updateStock);
router.post("/deleteStock", deleteStock);

module.exports = router;
