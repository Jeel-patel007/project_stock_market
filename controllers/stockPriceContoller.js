const { generalResponse } = require("../helpers/responceHandler");
const db = require("../models");

const { stock_prices } = db;

const addStockPrice = async (req, res) => {
  try {
    const { stockId, price } = req.body;
    const currentTime = new Date().toISOString();
    const result = await stock_prices.create({
      'stock_id': stockId,
      price,
      'asoftime': currentTime
    });
    return generalResponse(res, result, "price added", true)
  } catch (error) {
    console.log(error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while adding price to stock!",
      true
    );
  }
}

const stockPriceUpdate = async (req, res) => {
  try {
    const { stockId, price } = req.body;
    const currentTime = new Date().toISOString();
    const result = await stock_prices.update({
      price,
      'asoftime': currentTime,
    }, {
      where: {
        'stock_id': stockId
      }
    });
    return generalResponse(res, result, "stock price updated")
  } catch (error) {
    console.log(error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while updating stock price",
      "error",
      true
    );
  }
}

module.exports = { addStockPrice, stockPriceUpdate };


