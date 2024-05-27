const express = require("express");
const router = express.Router();
const { getAllStocks, getAllStockExchanges, addStock, updateStock, deleteStock } = require("../controllers/stockController");
const { addStockListing, updateStockListing, deleteStockListing } = require("../controllers/stockListingController");
const { addStockPrice, stockPriceUpdate } = require("../controllers/stockPriceContoller");
const { addStockPriceValidationRules, addStockValidation } = require("../validations/stockValidation");
const { validate } = require("../middlewares/validate");
const { generateDividend } = require("../controllers/dividendController");

router.get("/getStocks", getAllStocks);
router.get("/getStockExchanges", getAllStockExchanges);
router.post("/addStock", addStockValidation(), validate, addStock);
router.post("/updateStock", addStockValidation(), validate, updateStock);
router.post("/deleteStock", deleteStock);
router.post("/addStockListing", addStockListing);
router.post("/updateStockListing", updateStockListing);
router.post("/deleteStockListing", deleteStockListing);
router.post("/addStockPrice", addStockPriceValidationRules(), validate, addStockPrice);
router.post("/updateStockPrice", addStockPriceValidationRules(), validate, stockPriceUpdate)
router.post("/addDividend", generateDividend);

module.exports = router;
