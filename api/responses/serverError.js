var Exception = require('../exceptions/Exception.js');

module.exports = function serverError (data, options) {

  var request = this.req;
  var response = this.res;
  var sails = request._sails;

  // Logging error to the console.
  if (data !== undefined) {
    sails.log.error('Sending 500 ("Server Error") response: \n', String(data));
  }  else {
    sails.log.error('Sending empty 500 ("Server Error") response');
  }

  response.status(500);

  if (data instanceof Exception) {
    return response.json({
      success: false,
      exception: {
        type: data.constructor.name,
        message: data.message
      }
    });
  } else {
    return response.json(data);
  }
};

