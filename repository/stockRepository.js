const { restart } = require("nodemon");
const db = require("../models");

const { stock_master, stock_prices } = db;

const findStockById = async (stockId) => {
  try {
    const result = await stock_master.findByPk(stockId, {
      include: {
        model: stock_prices,
      }
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { findStockById }


