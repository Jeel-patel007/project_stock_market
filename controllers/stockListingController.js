const { generalResponse } = require("../helpers/responceHandler");
const db = require("../models");

const { stock_listing } = db;

const addStockListing = async (req, res) => {
  try {
    const { stockId, exchangeId, ticker } = req.body;
    const newStockList = await stock_listing.create({
      'stock_id': stockId,
      'exchange_id': exchangeId,
      ticker
    });
    return generalResponse(res, newStockList, "Stock listed", true);
  } catch (error) {
    console.log("Stock listing adding error:", error);
    return generalResponse(
      res,
      { success: false },
      "Somethig went wrong while adding stock listing!",
      true
    );
  }

};

const updateStockListing = async (req, res) => {
  try {
    const { listingId, stockId, exchangeId, ticker } = req.body;
    const result = await stock_listing.update({
      'stock_id': stockId,
      'exchange_id': exchangeId,
      'ticker': ticker
    }, {
      where: {
        id: listingId
      }
    });
    return generalResponse(res, result, "Stock listing updated", true);
  } catch (error) {
    console.log(error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while updating stock listing!",
      true
    );
  }
};

const deleteStockListing = async (req, res) => {
  try {
    const { listingId } = req.body;
    const result = await stock_listing.destroy({
      where: {
        'id': listingId
      }
    });
    return generalResponse(res,result,"Stock listing deleted",true)
  } catch (error) {
    console.log(error);
    return generalResponse(res,
      { success: false },
      "Something went wrong while deleting stock",
      true
    );
  }
};

module.exports = { addStockListing, updateStockListing, deleteStockListing };