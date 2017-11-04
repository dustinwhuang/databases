var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// open a connection with user and password
// create databse then close it
// open connection again with database

module.exports.chatConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

module.exports.chatConnection.connect();
// we only want to connect to database once
// best time to do is right after we create the connection
// we don't know if we're sending get or post requests first