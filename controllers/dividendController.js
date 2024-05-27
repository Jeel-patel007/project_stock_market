const { generalResponse } = require("../helpers/responceHandler");
const db = require("../models/index");

const { dividends } = db;

const generateDividend = async (req, res) => {
  try {
    const { stockId, amount } = req.body;
    const result = await dividends.create({
      'stock_id': stockId,
      'amount': amount
    });
    return generalResponse(res, result, "Dividend generated.", true)
  } catch (error) {
    console.log(error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while generating dividend",
      true
    );
  }
};

module.exports = { generateDividend };