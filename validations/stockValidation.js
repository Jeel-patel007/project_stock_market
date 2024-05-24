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

module.exports = { addStockPriceValidationRules, addStockValidation };