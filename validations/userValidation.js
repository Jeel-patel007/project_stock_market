const { body } = require("express-validator");

const userValidate = () => {
  return [
    body('firstName').exists().withMessage('firstname is required').isAlpha().withMessage('first name does not contain number'),
    body('lastName').exists().withMessage('lastname is required').isAlpha().withMessage('last name does not contain number'),
    body('email').exists().withMessage('email is required').isEmail().withMessage('email is invalid')
  ];
}

module.exports = { userValidate };