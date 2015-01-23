// config/http.js

module.exports.http = {
  middleware: {
    order: [
      'startRequestTimer',
      'cookieParser',
      'session',
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
