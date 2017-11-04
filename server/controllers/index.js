var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {  
      models.messages.get(data => res.end(JSON.stringify(data)));
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      // req.body is express
      // equivalent to initializing body to empty array
      // and listening to req.on('data', ...);
      models.users.post(req.body, (err) => {
        if (err) {
          throw (err);
        } else {
          models.messages.post(req.body, () => res.end());
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(data => res.end(JSON.stringify(data)));
    },

    post: function (req, res) {
      models.users.post(req.body, () => res.end());
    }
  }
};

