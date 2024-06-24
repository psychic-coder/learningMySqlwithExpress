CREATE DATABASE notes;
use notes;

create Table notes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    contents TEXT NOT NULL,
    created  TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO NOTES (title,contents) VALUES ("hello","Why"),("hello1","Why1");