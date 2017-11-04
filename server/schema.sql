CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  text TEXT,
  room TEXT,
  createdAt DATETIME,
  updatedAt DATETIME
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username TEXT,
  textColor TEXT,
  fontFamily TEXT,
  signOffMsg TEXT,
  lastSeen DATETIME
);

CREATE TABLE friends (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  friendId INT,
  friendsFrom DATETIME,
  FOREIGN KEY (userId, friendId)
    REFERENCES users(id, id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

