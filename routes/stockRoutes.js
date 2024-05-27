const express = require("express");

const { getAllStocks, getAllStockExchanges, addStock, updateStock, deleteStock } = require("../controllers/stockController");
const { addStockListing, updateStockListing, deleteStockListing } = require("../controllers/stockListingController");
const { addStockPrice, stockPriceUpdate } = require("../controllers/stockPriceContoller");
const { addStockPriceValidationRules, addStockValidation, stockListingValidate, stockDividendValidation } = require("../validations/stockValidation");
const { validate } = require("../middlewares/validate");
const { generateDividend } = require("../controllers/dividendController");

const router = express.Router();

router.get("/getStocks", getAllStocks);
router.get("/getStockExchanges", getAllStockExchanges);
router.post("/addStock", addStockValidation(), validate, addStock);
router.post("/updateStock", addStockValidation(), validate, updateStock);
router.get("/deleteStock/:id", deleteStock);
router.post("/addStockListing", stockListingValidate(), validate, addStockListing);
router.post("/updateStockListing", stockListingValidate(), validate, updateStockListing);
router.get("/deleteStockListing/:id", deleteStockListing);
router.post("/addStockPrice", addStockPriceValidationRules(), validate, addStockPrice);
router.post("/updateStockPrice", addStockPriceValidationRules(), validate, stockPriceUpdate)
router.post("/addDividend", stockDividendValidation(), validate, generateDividend);

module.exports = router;
