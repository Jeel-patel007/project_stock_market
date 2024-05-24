const { validationResult } = require('express-validator');
const { generalResponse } = require('../helpers/responceHandler');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return generalResponse(res, errors, "Please Provide Valid input", true)
  }
  next(); 
};

module.exports = validate;
