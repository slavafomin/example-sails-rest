// config/http.js

module.exports.http = {
  middleware: {

    disablePoweredBy: function(request, response, next) {
      var expressApp = sails.hooks.http.app;
      expressApp.disable('x-powered-by');
      //response.set('X-Powered-By', 'One Thousand Hamsters');
      next();
    },

    order: [
      'startRequestTimer',
      'myRequestLogger',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      'disablePoweredBy',
      'router',
      '404',
      '500'
    ]
  }
};
