const { body } = require("express-validator");

const addStockValidation = () => {
  return [
    body('openPrice').exists().withMessage('openPrice is required').isDecimal().withMessage('Price must be a decimal-point number'),
    body('volume').isInt().withMessage('Volume must be integer-point number')
  ];
};

const addStockPriceValidationRules = () => {
  return [
    body('stockId').exists().withMessage('Stock ID is required').isInt().withMessage('Stock ID must be an integer'),
    body('price').exists().withMessage('Price is required').isFloat().withMessage('Price must be a floating-point number')
  ];
};

const transactionValidation = () => {
  return [
    body('userId').exists().withMessage('UserId is required').isInt().withMessage('UserId must be and integer'),
    body('priceId').exists().withMessage('PriceId is required').isInt().withMessage('priceId must be and integer'),
    body('quantity').exists().withMessage('Quantity is requirecd').isInt().withMessage('Quantity must be integer')
  ];
}

const stockListingValidate = () => {
  return [
    body('stockId').exists().withMessage('StockId is required').isInt().withMessage('stockId must be an integer'),
    body('exchangeId').exists().withMessage('ExchangeId is required').isInt().withMessage('ExchangeId must be an integer'),
    body('ticker').exists().withMessage('ticker is required')
  ];
}

const stockDividendValidation = () => {
  return [
    body('stockId').exists().withMessage('StockId must required!').isInt().withMessage('StockId must be an integer'),
    body('amount').exists().withMessage('amount must required!').isFloat().withMessage('invalid amount')
  ];
}

module.exports = { addStockPriceValidationRules, addStockValidation, transactionValidation, stockListingValidate, stockDividendValidation };