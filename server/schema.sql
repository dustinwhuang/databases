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
  userId INT NOT NULL,
  friendId INT NOT NULL,
  friendsFrom DATETIME,

  FOREIGN KEY (userId)
    REFERENCES users(id),

  FOREIGN KEY (friendId)
    REFERENCES users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

