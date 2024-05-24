const { body } = require("express-validator");

const addStockPriceValidationRules = () => {
  return [
    body('stockId').exists().withMessage('Stock ID is required').isInt().withMessage('Stock ID must be an integer'),
    body('price').exists().withMessage('Price is required').isFloat().withMessage('Price must be a floating-point number')
  ];
};

module.exports = { addStockPriceValidationRules };