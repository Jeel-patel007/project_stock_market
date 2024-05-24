const express = require("express");
const router = express.Router();
const { getAllStocks, getAllStockExchanges, addStock, updateStock, deleteStock, getStock } = require("../controllers/stockController");
const { addStockListing, updateStockListing, deleteStockListing } = require("../controllers/stockListingController");
const { addStockPrice } = require("../controllers/stockPriceContoller");
const { addStockPriceValidationRules, addStockValidation } = require("../validations/stockValidation");
const validate = require("../middlewares/validate");

router.get("/getStock/:id", getStock)
router.get("/getAllStocks", getAllStocks);
router.get("/getStockExchanges", getAllStockExchanges);
router.post("/addStock", addStockValidation(), validate, addStock);
router.post("/updateStock", addStockValidation(), validate, updateStock);
router.post("/deleteStock", deleteStock);
router.post("/addStockListing", addStockListing);
router.post("/updateStockListing", updateStockListing);
router.post("/deleteStockListing", deleteStockListing);
router.post("/addStockPrice", addStockPriceValidationRules(), validate, addStockPrice);

module.exports = router;
