const { generalResponse } = require("../helpers/responceHandler");
const db = require("../models");

const { user_has_stock, transaction, stock_prices } = db;

const userBuyStocks = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const { userId, type, quantity, priceId } = req.body;
    let result = await stock_prices.findOne({
      where: {
        id: priceId
      }
    }, { transaction: t });

    const stockId = result.dataValues.stock_id;
    const price = result.dataValues.price;

    result = await transaction.create({
      'user_id': userId,
      'stock_id': stockId,
      type,
      quantity,
      price,
      'transaction_time': new Date().toISOString()
    }, { transaction: t });

    result = await user_has_stock.create({
      'user_id': userId,
      'price_id': priceId,
      quantity
    }, { transaction: t });

    await t.commit();
    return generalResponse(res, result, "You have purchased stock.");
  } catch (error) {
    console.log("error while buying stocks", error);
    await t.rollback();
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while buying stock"
    );
  }
}

const userSellStocks = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const { userId, quantity, priceId } = req.body;

    let result = await stock_prices.findOne({
      where: {
        id: priceId
      }
    }, { transaction: t });

    const stockId = result.dataValues.stock_id;
    const price = result.dataValues.price;

    const userStock = await user_has_stock.findOne({
      where: {
        user_id: userId,
        price_id: priceId
      }
    }, { transaction: t });

    if (!userStock || userStock.quantity < quantity) {
      throw new Error("Insufficient stocks to sell");
    }a

    result = await transaction.create({
      'user_id': userId,
      'stock_id': stockId,
      type: 'sell',
      quantity,
      price,
      'transaction_time': new Date().toISOString()
    }, { transaction: t });

    await user_has_stock.update({
      quantity: userStock.quantity - quantity
    }, {
      where: {
        user_id: userId,
        price_id: priceId
      },
      transaction: t
    });

    await t.commit();
    return generalResponse(res, result, "You have sold stocks.");
  } catch (error) {
    console.error("Error while selling stocks:", error);
    await t.rollback();
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while selling stocks"
    );
  }
}


module.exports = { userBuyStocks, userSellStocks }