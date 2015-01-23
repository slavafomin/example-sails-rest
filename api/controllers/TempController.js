// api/controllers/TempController.js

var NotFoundException = require('../exceptions/NotFoundException.js');

module.exports = {
  index: function(request, response) {

    throw new NotFoundException('Specific user is not found.');

    return response.json({
      message: 'Hello World!'
    });
  }
};
