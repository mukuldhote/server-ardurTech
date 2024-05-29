# server-ardurTech

#MySQL queries

## Database Creation
CREATE DATABASE fastapp;


## Table Creation
USE fastapp;

CREATE TABLE Section (
    SectionID INT PRIMARY KEY AUTO_INCREMENT,
    SectionName VARCHAR(255) NOT NULL
);

CREATE TABLE Field (
    FieldID INT PRIMARY KEY AUTO_INCREMENT,
    FieldName VARCHAR(255) NOT NULL,
    SectionID INT,
    FOREIGN KEY (SectionID) REFERENCES Section(SectionID)
);

CREATE TABLE CheckPoint (
    CheckPointID INT PRIMARY KEY AUTO_INCREMENT,
    CheckPointName VARCHAR(255) NOT NULL,
    FieldID INT,
    FOREIGN KEY (FieldID) REFERENCES Field(FieldID)
);


## Row Insertion Transaction

START TRANSACTION;

-- Step 1: Insert into Sections table { use below to add new section and fields
INSERT INTO Section (SectionName) VALUES ('CONTRACT SECTION');
-- Retrieve the last inserted SectionID
SET @SectionID = LAST_INSERT_ID();
-- }

-- Use below to add fields of already existing 'SectionName' in 'Section' Table
SET @SectionID = (select max(sectionID) from section);

-- Step 2: Insert into Fields table
INSERT INTO Field (FieldName, SectionID) VALUES ('If Yes, report the total dollar amount and describe the items to be paid.', @SectionID);
-- Retrieve the last inserted FieldID
SET @FieldID = LAST_INSERT_ID();

-- Step 3: Insert into SubFields table
INSERT INTO checkpoint (checkPointName, FieldID) VALUES ('check from Purchase agreement.', @FieldID);

COMMIT;

