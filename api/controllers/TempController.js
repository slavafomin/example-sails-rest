// api/controllers/TempController.js

module.exports = {
  index: function(request, response) {
    return response.json({
      message: 'Hello World!'
    });
  }
};
