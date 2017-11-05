// var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// open a connection with user and password
// create databse then close it
// open connection again with database

// module.exports.chatConnection = mysql.createConnection({
//   user: 'student',
//   password: 'student',
//   database: 'chat'
// });

// module.exports.chatConnection.connect();
// we only want to connect to database once
// best time to do is right after we create the connection
// we don't know if we're sending get or post requests first


var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'student', 'student');

var Messages = db.define('messages', {
  objectId: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  userId: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

var Users = db.define('users', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  username: {type: Sequelize.STRING(32), unique: true},
  textColor: Sequelize.STRING,
  fontFamily: Sequelize.STRING,
  signOffMsg: Sequelize.STRING,
  lastSeen: Sequelize.DATE
});

var Friends = db.define('friends', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  userId: {type: Sequelize.INTEGER, references: {model: Users, key: 'id'}},
  friendId: {type: Sequelize.INTEGER, references: {model: Users, key: 'id'}},
  friendsFrom: Sequelize.DATE
});

module.exports = {
  Messages,
  Users,
  Friends
};