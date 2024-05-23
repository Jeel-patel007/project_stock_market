const { generalResponse } = require("../helpers/responceHandler");
const db = require("../models/index");
const { stock_master, stock_prices, stock_exchanges } = db;

const getAllStocks = async (req, res) => {
    try {
        const result = await stock_master.findAll({
            include: {
                model: stock_prices
            }
        });
        return generalResponse(
            res,
            result,
            "stocks retrived",
            true
        );
    } catch (error) {
        console.log(error);
        return generalResponse(
            res,
            { success: false },
            "Something went wrong while fetching stocks!",
            "error",
            true
        );
    }
}

const getAllStockExchanges = async (req, res) => {
    try {
        const result = await stock_exchanges.findAll();
        return generalResponse(
            res,
            result,
            "Stocks Exchange retrived",
            true
        );
    } catch (error) {
        console.log(error);
        return generalResponse(
            res,
            { success: false },
            "Something went wrong while fetching stocks exchange",
            "error",
            true
        )
    }
}

module.exports = { getAllStocks, getAllStockExchanges };
