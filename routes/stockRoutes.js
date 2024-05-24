const express = require("express");
const router = express.Router();
const { getAllStocks, getAllStockExchanges, addStock, updateStock, deleteStock } = require("../controllers/stockController");
const { addStockListing, updateStockListing, deleteStockListing } = require("../controllers/stockListingController");
const { addStockPrice } = require("../controllers/stockPriceContoller");
const { addStockPriceValidationRules } = require("../validations/stockValidation");
const validate = require("../middlewares/validate");

router.get("/getStocks", getAllStocks);
router.get("/getStockExchanges", getAllStockExchanges);
router.post("/addStock", addStock);
router.post("/updateStock", updateStock);
router.post("/deleteStock", deleteStock);
router.post("/addStockListing", addStockListing);
router.post("/updateStockListing", updateStockListing);
router.post("/deleteStockListing", deleteStockListing);
router.post("/addStockPrice", addStockPriceValidationRules(), validate, addStockPrice);

module.exports = router;
