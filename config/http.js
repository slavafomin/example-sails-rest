// config/http.js

module.exports.http = {
  middleware: {
    order: [
      'startRequestTimer',
      'myRequestLogger',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      'poweredBy',
      'router',
      '404',
      '500'
    ]
  }
};
