var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // var queryString = `
      //                    SELECT messages.objectId, users.username, messages.text, messages.roomname, messages.createdAt
      //                    FROM messages INNER JOIN users
      //                    WHERE messages.userId = users.id
      //                    ORDER BY messages.createdAt DESC
      //                   `;

      // db.chatConnection.query(queryString, (err, results) => callback({results: results}));
      
    }, // a function which produces all the messages

    post: function ({username, text, roomname}, callback) {
      // var queryUserId = 'SELECT id FROM users WHERE ?'; 
      // var queryUserArgs = {username: username.substr(0, 32)};
      
      // db.chatConnection.query(queryUserId, queryUserArgs, (err, results) => {
      //   var queryString = 'INSERT INTO messages SET ?';
      //   var queryArgs = {userId: results[0].id, text: text, roomname: roomname};
      //   db.chatConnection.query(queryString, queryArgs, () => callback());
      // });
    } // a function which can be used to insert a message into the database
  }, //  set text=text';dR

  users: {
    get: function (callback) {
      // var queryString = 'SELECT * FROM users';
      // db.chatConnection.query(queryString, (err, results) => callback(results));
      db.Users.sync()
        .then(() => db.Users.findAll())
        .then(results => callback(results)); // on success return of previous then
    },

    post: function ({username}, callback) {
      // var queryString = 'INSERT IGNORE INTO users SET ?';
      // var queryArgs = {username: username};
      // db.chatConnection.query(queryString, queryArgs, (err) => callback(err));
      db.Users.sync()
        .then(() => db.Users.create({username: username}))
        .then(() => callback()); // have to call cb b/c it's a required param in previous cb 
    }
  }
};
