CREATE TABLE `books`(
    `book_title` VARCHAR (20) NOT NULL,
    `book_ID` INT (100) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`book_ID`)
);

CREATE TABLE `libraries`(
    `library_name` VARCHAR (50) NOT NULL,
    `library_ID` INT (20) NOT NULL,
    library_FK INT (100) NOT NULL,
    PRIMARY KEY `PK` (`library_id`),
    KEY `FK` (library_FK),
        CONSTRAINT `library_ibfk_2`
            FOREIGN KEY (library_FK) REFERENCES `books` (`book_ID`)
);
