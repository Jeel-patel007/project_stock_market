const { generalResponse } = require("../helpers/responceHandler");
const db = require("../models");

const { stock_prices, user_watchlist } = db;

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

const addWatchlist = async (req, res) => {
  try {
    const { stockId, userId } = req.body;
    const result = await user_watchlist.create({
      'user_id': userId,
      'stock_id': stockId
    });
    return generalResponse(res, result, "Stock added to your watchlist");
  } catch (error) {
    console.log(error);
    return generalResponse(
      res,
      { success: false },
      "Something Went wrong while adding stock into watchlist!",
      true
    )
  }
}

module.exports = { addStockPrice, addWatchlist };


