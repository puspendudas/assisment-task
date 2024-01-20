const validator = require('validator');

const validatorMiddleware = function (fields) {
    return function (req, res, next) {
      var errors = [];
      console.log(fields)
      fields.forEach(function (field) {
        // Check if the field is required
        if (field.required && !req.body[field.name]) {
          errors.push(field.name + ' is required');
        }
  
        // Check if a custom validation function is provided
        if (field.validate && typeof field.validate === 'function') {
          if (!field.validate(req.body[field.name])) {
            errors.push('Invalid value for ' + field.name);
          }
        }
      });
  
      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }
  
      next(); // If validation passes, proceed to the next middleware or route handler
    };
  };

module.exports = validatorMiddleware;