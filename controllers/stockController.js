const { where } = require("sequelize");
const { generalResponse } = require("../helpers/responceHandler");
const db = require("../models/index");
const { stock_master, stock_prices, stock_exchanges } = db;

const addStock = async (req, res) => {
    try {
        const { companyName, sector, industry, openPrice, currency, volume } = req.body;
        const result = await stock_master.create({
            'company_name': companyName,
            'sector': sector,
            'industry': industry,
            'volumen': parseInt(volume),
            'currency': currency,
            'open_price': parseInt(openPrice)
        });
        console.log(result);
        if (!result) {
            return generalResponse(
                res,
                { success: false },
                "Someting went wrong while adding stock!",
                true
            );
        }
        return generalResponse(
            res,
            { success: true },
            "Stock added.",
            true
        );
    } catch (error) {
        console.log(error);
        return generalResponse(
            res,
            { success: false },
            "Something went wrong while adding stock",
            true
        )
    }
}

const updateStock = async (req, res) => {
    try {
        const { stockId, companyName, sector, industry, openPrice, currency, volume } = req.body;
        const result = await stock_master.update({
            'company_name': companyName,
            'sector': sector,
            'industry': industry,
            'volumen': parseInt(volume),
            'currency': currency,
            'open_price': parseInt(openPrice)
        }, {
            where: {
                id: stockId
            }
        });
        if (!result) {
            return generalResponse(
                res,
                { success: false },
                "Something went wrong while updating stock",
                true
            );
        }
        return generalResponse(
            res,
            "Stock updated",
            true
        );
    } catch (error) {
        console.log(error);
        return generalResponse(
            res,
            { success: false },
            "Something went wrong while updating stock",
            true
        );

    }
}

const deleteStock = async (req, res) => {
    try {
        const { stockId } = req.body;
        const result = await stock_master.destroy({
            where: {
                id: stockId
            }
        });
        if (!result) {
            return generalResponse(
                res,
                { success: false },
                "Something went wrong while deleting stock",
                true
            );
        }
        return generalResponse(
            res,
            "Stock deleted",
            true
        );

    } catch (error) {
        console.log(error);
        return generalResponse(
            res,
            { success: false },
            "Something went wrong while deleteing stock",
            true
        );
    }
}

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
        console.lsoog(error);
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

module.exports = { getAllStocks, getAllStockExchanges, addStock, updateStock, deleteStock };
