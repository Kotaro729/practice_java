CREATE DATABASE todoapp
DEFAULT CHARACTER SET utf8;
USE todoapp;
CREATE TABLE todos(
 id INT PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(30),
 importance INT
);