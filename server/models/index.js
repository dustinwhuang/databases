var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.chatConnection.connect();
      var queryString = 'SELECT * FROM messages';
      db.chatConnection.query(queryString);
      db.chatConnection.end();
    },
     // a function which produces all the messages
    post: function ({username, message, roomname}) {
      db.chatConnection.connect();
      var queryString = `INSERT INTO messages (userId, text, room) VALUE (${username}, ${message}, ${roomname})`;
      db.chatConnection.query(queryString);
      db.chatConnection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      
    },
    
    post: function () {
      
    }
  }
};

// {
//   username: 'Valjean',
//   message: 'In mercy\'s name, three days is all I need.',
//   roomname: 'Hello'
// }