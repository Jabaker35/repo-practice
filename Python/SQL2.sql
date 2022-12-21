CREATE DATABASE contact;
USE contact; 

CREATE TABLE contacts (
    title CHAR(5),
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL
);

INSERT INTO contacts (title,firstName,lastName,country,phone)
VALUES
('Mr','John','Baker','United States','864-231-4567'),
('Mrs','Judy','Rivers','United States','732-456-9856'),
('','Daniel','Schoffield','Canada','506-444-2381'),
('Mr','Galvin','Sanders','Canada','204-889-3576'),
('','Jessica','Vasquez','Brazil','+55-11-2541-6598'),
('Ms','Catherine','Armando','Brazil','+55-11-3284-9665'),
('','Jeffery','Banks','South Africa','+27-21-364-7590'),
('','Trevor','Noah','South Africa','+27-21-389-5490'),
('Ms','Tonya','Brushard','United Kingdom','+44-20-5214-8321'),
('','Gabriel','Boston','United Kingdom','+44-22-2698-7542');

SELECT * FROM contacts;

SELECT CONCAT(title,' ', firstName, ' ', lastName) Fullname, country, phone
FROM contacts
ORDER BY country, phone;