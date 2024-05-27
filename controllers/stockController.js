const { generalResponse } = require("../helpers/responceHandler");
const db = require("../models/index");
const { stock_master, stock_prices, stock_exchanges } = db;

const addStock = async (req, res) => {
    try {
        const { companyName, sector, industry, openPrice, currency, volume } = req.body;
        const result = await stock_master.create({
            company_name: companyName,
            sector: sector,
            industry: industry,
            volumen: Number(volume),
            currency: currency,
            open_price: Number(openPrice)
        });
        console.log(result);
        if (!result) {
            return generalResponse(
                res,
                { success: false },
                "Something went wrong while adding stock!",
                true
            );
        }
        return generalResponse(
            res,
            result,
            "Stock added.",
            true
        );
    } catch (error) {
        console.error("Error adding stock:", error);
        return generalResponse(
            res,
            { success: false },
            "Something went wrong while adding stock",
            "error",
            true
        );
    }
}

const updateStock = async (req, res) => {
    try {
        const { stockId, companyName, sector, industry, openPrice, currency, volume } = req.body;
        const result = await stock_master.update({
            company_name: companyName,
            sector: sector,
            industry: industry,
            volumen: Number(volume),
            currency: currency,
            open_price: Number(openPrice)
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
                "error",
                true
            );
        }
        return generalResponse(
            res,
            { success: true },
            "Stock updated",
            true
        );
    } catch (error) {
        console.error("Error updating stock:", error);
        return generalResponse(
            res,
            { success: false },
            "Something went wrong while updating stock",
            "error",
            true
        );
    }
}

const deleteStock = async (req, res) => {
    try {
        const stockId = req.params.id;
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
                "error",
                true
            );
        }
        return generalResponse(
            res,
            { success: true },
            "Stock deleted",
            true
        );
    } catch (error) {
        console.error("Error deleting stock:", error);
        return generalResponse(
            res,
            { success: false },
            "Something went wrong while deleting stock",
            "error",
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
            "Stocks retrieved",
            true
        );
    } catch (error) {
        console.error("Error fetching stocks:", error);
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
            "Stock exchanges retrieved",
            true
        );
    } catch (error) {
        console.error("Error fetching stock exchanges:", error);
        return generalResponse(
            res,
            { success: false },
            "Something went wrong while fetching stock exchanges",
            "error",
            true
        );
    }
}

module.exports = { getAllStocks, getAllStockExchanges, addStock, updateStock, deleteStock };
