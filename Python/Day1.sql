SELECT * FROM customers;
SELECT * FROM employees;

SELECT employeeNumber, jobTitle FROM employees;

SELECT orderDate, status FROM orders;

SELECT firstName, lastName, jobTitle FROM employees WHERE jobTitle = 'Sales Rep';

SELECT firstName, lastName, jobTitle, officeCode FROM employees WHERE jobTitle = 'Sales Rep' AND officeCode = 1 ORDER BY lastName DESC;

SELECT lastName FROM employees WHERE lastName = 'denis';

USE employees;
USE classicmodels;

SELECT * FROM employees WHERE last_Name = 'Denis' AND gender = 'M' OR gender = 'F';

SELECT * FROM employees WHERE  first_name IN('Cathy', 'Mark', 'Nathan');

SELECT orderNumber, quantityOrdered, priceEach FROM classicmodels.orderdetails ORDER BY priceEach DESC;

-- Shortcut: Use column's numbers instead of the column name
SELECT contactLastName, contactFirstName FROM customers ORDER BY 1 DESC, 2 DESC;

SELECT lastName, firstName FROM employees WHERE lastname LIKE ('L%');

SELECT orderNumber AS 'Order Number', quantityOrdered, priceEach FROM orderdetails WHERE priceEach > 205 ORDER BY priceEach DESC;

-- JOIN defualts to INNER JOIN: refers to the names of the column(s) associated between to tables and its values
SELECT * FROM orderdetails od JOIN orders o ON od.orderNumber = o.orderNumber;

-- Using a letter behind the table helps refer to the tables in the JOIN statement
-- OUTER JOIN refers to tables with no relationship to their respectable column names
-- OUTER JOIN: RIGHT and LEFT JOIN refers to the tables in the JOIN statement
-- Avoid using RIGHT with LEFT just use Left with the main table at FROM as best practice
-- Simple math/comparison operators + , - , * , / , %, <, >, >=, <=, !=, <>
-- Paranthesis changes the order of operation
-- Distinct returns the uniqueness/numbers of the table avoiding repeats
-- Count the number of records within a column
-- Use single qoutes to retreive string or metadata within the column
-- Operators: AND, OR, NOT, IN, AS, BETWEEN; remember to use paranthesis when using IN
-- LIKE operator only uses % for any number of characters and _ single number of characters
-- REGEXP: regular expression replaces the LIKE operator, ^ beginning, $ ending, | multiple search pattern
-- [] used to hold multiple or a range of characters before/after a character of choice
-- AS creates an alias column name 
-- IS NULL, IS NOT NULL
-- SORTING: ORDER BY DESC, ASC
-- LIMIT offset by using integer presenting the start point, the amount of records to be returned
-- Use AND in JOIN will compound columns between tables 
-- WHERE can be used but it will be an Implicit Expression

-- DML: Data Manipulation Language, DDL: Data Definition Langauge, 

-- This is how you can join two or more tables across databases
/* SELECT firstName AS 'First Name', lastName AS 'Last Name', e.email AS 'E-Mail', ee.gender AS Gender, ee.birth_date AS Birthdate
FROM employees e JOIN employees.employees ee ON e.lastName = ee.last_name */

-- Multiple JOIN between multiple tables
-- USING can only be used when columns are exactly the same
-- If not use the ON keyword to contect or identify which columns closely matches b/w tables
SELECT 
    od.orderNumber AS 'Order #', c.customerNumber AS 'Customer #', c.contactLastName AS 'Last Name',
    c.contactFirstName AS 'First Name', c.phone AS Phone, c.city AS City, c.state AS State,
    c.postalCode AS 'Postal Code', c.creditLimit AS 'Credit Limit', od.quantityOrdered 'Quantity',
    od.priceEach AS Price, pm.amount AS Paid, o.orderDate AS 'Order Date', o.shippedDate AS 'Ship Date',
    pm.paymentDate AS 'Date Paid', o.status AS Status, p.productName AS 'Product Name', o.comments As Comments, 
    e.lastName AS 'Sales Rep', e.extension AS Ext, e.email 'Sales Rep E-Mail'
FROM orderdetails od 
		JOIN orders o USING (orderNumber) 
        JOIN products p USING (productCode)
        JOIN customers c USING (customerNumber)
        JOIN payments pm USING (customerNumber)
        JOIN employees e ON e.employeeNumber = c.salesRepEmployeeNumber
WHERE priceEach > 150 AND comments IS NULL AND state IS NOT NULL
ORDER BY priceEach DESC;

-- Self JOIN
SELECT e.employeeNumber, e.firstName AS 'First Name', e.lastName AS 'Last Name', m.firstName AS Manager 
FROM employees e 
LEFT JOIN employees m ON e.reportsTo = m.employeeNumber;

-- NATURAL JOIN creates unexpected results suggested not to use
-- CROSS JOIN combines all the records between all tables
-- Only use this for certain measures like size, colors, etc.

-- Explicit Expression CROSS JOIN (Preferred)
SELECT p.productName AS Name, pl.textDescription AS Description, pl.productLine AS 'Product Line'
FROM products p CROSS JOIN productlines pl ORDER BY p.productName;

-- Implicit Expression CROSS JOIN
SELECT p.productName AS Name, pl.textDescription AS Description, pl.productLine AS 'Product Line'
FROM products p, productlines pl ORDER BY p.productName;

-- JOIN by columns within the same table: UNION
-- Remember there has to be the same amount of rows with each chosen table
SELECT orderNumber, orderDate, 'Shipped' AS Status FROM orders WHERE orderDate >= '2005-01-01'
UNION
SELECT orderNumber, orderDate, 'Shipped' AS Status FROM orders WHERE orderDate < '2004-01-01';

SELECT customerNumber AS 'Customer #', customerName AS Name, creditLimit AS 'Credit Limit', 'BRONZE' AS TYPE 
	FROM customers WHERE creditLimit < 75000 
UNION
SELECT customerNumber, customerName, creditLimit, 'SILVER' AS TYPE 
	FROM customers WHERE creditLimit BETWEEN 75000 AND 100000 
UNION
SELECT customerNumber, customerName, creditLimit, 'GOLD' AS TYPE 
	FROM customers WHERE creditLimit > 100000 ORDER BY creditLimit;
    
/* The values has to match the inputs
Inserting values into columns
INSERT INTO customers (contactFirstName, contactLastName, phone, addressLine1, city, state, 
postalCode, country, salesRepEmployeeNumber, creditLimit)
VALUES (DEFAULT, 'Heavenly Delight', 'John', 'Smith', 9734442381, '492 21st Street', 'Irvington', 'NJ', 
'07111, USA, 1143, 76500);

Inserting values into rows
INSERT INTO orderdetails (territory)
VALUES ('NORTHEAST'), ('SOUTHEAST'), ('NORTHCENTRAL'), 
	   ('SOUTHCENTRAL'), ('NORTHWEST'), ('SOUTHWEST');

Inserting Hierarchical Rows: Multiple Rows into multiple tables
INSERT INTO orders (customerNumber, orderDate, status)
VALUES (DEFAULT, '2004-08-09', 'RESOLVED')

--The child record
INSERT INTO orderdetails
VALUES(LAST_INSERT_ID(), ),
	  (LAST_INSERt_ID(), )

--Retreives the last ID inserted into the row
SELECT LAST_INSERT_ID(); 

--Creating Table: SELECT will mimics the table columns and info
CREATE TABLE orders_archived AS
SELECT * FROM orders WHERE orderDate < '2004-01-01';

CREATE TABLE processedpayments AS
SELECT od.orderNumber, od.productCode, od.quantityOrderded, od.priceEach, pm.amount,
		o.orderDate, o. requiredDate, o.shippedDate, pm.paymentDate, o.status
FROM orderdetails od
	JOIN orders o USING (orderNumber)
	JOIN payments pm USING (customerNumber);

CREATE DATABASE test1 IF NOT EXISTS test1;
*/

SELECT orderNumber, quantityordered, priceeach, quantityordered * priceEach AS Bill FROM orderdetails ORDER BY Bill;

-- Sorting by the field(column, meta-data picklist) within the column
SELECT ordernumber, status, comments FROM orders 
ORDER BY field(status, 'In process', 'On Hold', 'Cancelled', 'Resolved', 'Disputed', 'Shipped');

-- Using _ behind numbers for LIKE searches keep integrity of the amount of numbers you are retrieving
SELECT * FROM employees WHERE emp_no LIKE ('1000_') ;

-- Gives the count of spescific values within a column
SELECT COUNT(DISTINCT gender) FROM employees;

SELECT COUNT(salary) FROM salaries WHERE salary >= 100000;

SELECT COUNT(*) FROM dept_manager;

SELECT dept_no, count(dept_no) AS Dept_Count FROM dept_manager GROUP BY dept_no;

-- WHERE cannot be used in aggregate functions, use HAVING only after and with GROUP BY
SELECT first_name, COUNT(first_name) AS Name_Count FROM employees 
GROUP BY first_name HAVING Name_Count >= 250 ORDER BY Name_Count DESC;

SELECT emp_no, avg(salary) AS Avg_Salary FROM salaries 
GROUP BY emp_no HAVING Avg_Salary > 120000 ORDER BY Avg_Salary DESC LIMIT 5, 15;

-- Aggregate functions: AVG, SUM, COUNT, MIX, MAX, ROUND(AVG(salary),2) = gives you two decimals

-- DDL: Date Definition Language, CREATE, UPDATE, INSERT, REMOVE, DELETE
-- Auto Increment -> Unique -> Primary Key -> Foreign Key -> Default
-- Enum creates selective values

CREATE DATABASE test1;
USE test1;

CREATE TABLE Employee(EmpId varchar(10), EmpName VARCHAR(20), Salary INTEGER, DeptId VARCHAR(10), ManagerId VARCHAR(10));
INSERT INTO Employee VALUES
('E1','John', 30000,'D1','M1'),('E2','Ram',34000,'D1','M1'),
('E3','Ali',36000,'D2','M2'),('E4','Allen',32000,'D2','M2'),
('E5','Dana',37000,'D8','M4'),('E6','Karen',34000,'D8','M4');

CREATE TABLE Department(deptid VARCHAR(10), deptname VARCHAR(20));
CREATE TABLE Manager(managerid VARCHAR(10), managername VARCHAR(20), deptid VARCHAR(10));
CREATE TABLE Projects(projectid VARCHAR(10), employee VARCHAR(10), projectname VARCHAR(20), teamMemId VARCHAR(10));

CREATE DATABASE sales;
USE sales;

CREATE TABLE sales1
( purchase_number INT AUTO_INCREMENT NOT NULL UNIQUE, -- PRIMARY KEY
	date_of_purchase DATE NOT NULL,
	customer_id INT,
	item_code VARCHAR(10) NOT NULL,
    PRIMARY KEY(purchase_number),
    FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
    );

CREATE TABLE customers
( customer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(15),
    last_name VARCHAR(15),
    email_address VARCHAR(25),
    number_of_complaints INT
);

ALTER TABLE customers
ADD COLUMN gender ENUM('M','F') AFTER last_name;

INSERT INTO customers(first_name, last_name, gender, email_address)
VALUES('John','Mackinely','M','john@xyz.com');

ALTER TABLE customers
CHANGE COLUMN number_of_complaints number_of_compliants INT DEFAULT 1;

SELECT e.EmpId, e.EmpName, e.Salary, e.DeptId, e.ManagerId, m.ManagerName, d.DeptName, p.ProjectName
FROM employee e JOIN managers m USING (ManagerId) 
JOIN deparment d USING (DeptId) 
JOIN projects p ON e.EmpId = p.TeamMemId;

SELECT p.productName, p.productCode, o.customerNumber 
FROM products p JOIN orderdetails USING (productCode)
JOIN orders o USING (orderNumber) WHERE orderNumber = '10123';

SELECT dm.emp_no, e.first_name, e.last_name, dm.dept_no, d.dept_name, e.hire_date
FROM employees e JOIN dept_manager dm USING (emp_no)
JOIN departments d USING (dept_no);

SELECT e.emp_no, e.last_name, dm.dept_no FROM employees e LEFT JOIN dept_manager dm USING (emp_no)  
WHERE e.last_name = 'Markovitch' ORDER BY dm.dept_no DESC, e.emp_no;

SELECT e.emp_no, e.first_name, e.last_name, t.title 
FROM employees e JOIN titles t USING (emp_no) WHERE e.first_name = 'Margareta' AND e.last_name = 'Markovitch';

SELECT e.*, d.* FROM employees e CROSS JOIN departments d WHERE e.emp_no < 10011;

-- GROUP BY divides the string/metadata within the table
SELECT e.gender, COUNT(e.emp_no), dm.dept_no FROM employees e 
JOIN dept_manager dm USING (emp_no) GROUP BY e.gender ORDER BY COUNT(e.gender) DESC;

-- Select the employee numbers of all individuals who have signed more than 1 contract after the 1st of January 2000.
SELECT emp_no, from_date, COUNT(from_date) AS 'Contract Count' FROM dept_emp WHERE from_date > '200-01-01' 
GROUP BY emp_no HAVING COUNT(from_date) > 1 ORDER BY emp_no; 

-- Finding the maximum order
SELECT o.ordernumber, p.amount, o.orderDate, o.customerNumber, c.salesRepEmployeeNumber
FROM orders o JOIN payments p USING (customerNumber) JOIN customers c USING (customerNumber)
WHERE p.amount BETWEEN 2000 AND 6000 ORDER BY p.amount;

SELECT customerNumber, ord_date, MAX(purch_amt) FROM orders GROUP BY customer_id, ord_date 
HAVING MAX(purch_amt) IN(2000, 3000, 5760, 6000);

-- UNION ALL merges all the columns together separating duplicate information

SELECT CONCAT(firstname, ' ', lastname) fullname, 'Employee' AS 'Contact Type' FROM employees
UNION
SELECT CONCAT(contactfirstname, ' ', contactlastname) fullname, 'Customer' FROM customers ORDER BY fullname;

-- Case statements: if else, case when end,

SELECT * FROM customer;
SELECT customer_id, 
CASE customer_id 
WHEN 2 THEN 'WINNER' 
WHEN 5 THEN 'Runner-Up' 
ELSE 'Regular' END results
FROM customer;

-- Premiun for my loyal customers 1-100, Plus for semi 101-200, Regular for the rest 201 >
SELECT customer_id, 
CASE WHEN customer_id < 100 THEN 'Premium' 
WHEN customer_id BETWEEN 100 AND 200 THEN 'Plus' 
ELSE 'Regular' 
END 'Customer Class' FROM customer;

-- To rename the data in the columns
SELECT emp_no, first_name, last_name, if(gender = 'M', 'Male','FEMALE') AS gender FROM employees;

-- To find the different values in rental rate 0.99, 2.99, 4.99
-- Puts everything in on one row
SELECT 
SUM(CASE rental_rate WHEN 0.99 THEN 1 ELSE 0 END) AS Bargains,
SUM(CASE rental_rate WHEN 2.99 THEN 1 ELSE 0 END) AS Regular,
SUM(CASE rental_rate WHEN 4.99 THEN 1 ELSE 0 END) AS Premium
FROM film;

-- Returns three rows
SELECT rental_rate,
CASE 
WHEN rental_rate = 0.99 THEN 'Bargains'
WHEN rental_rate = 2.99 THEN 'Regulars'
ELSE 'Premium' END Film_Type,
COUNT(rental_rate) AS 'Film Type Count'
FROM film GROUP BY Film_Type;

-- Set containing employee number, first name, last name with emp_no higher than 109990.
-- Create 4 column indicating employee or manager

SELECT e.emp_no, first_name, last_name,
CASE
WHEN e.emp_no = d.emp_no THEN 'Manager'
ELSE 'Employee' END Position
FROM employees e LEFT JOIN dept_manager d USING (emp_no) WHERE emp_no > 109990;

SELECT e.emp_no, first_name, last_name,
IF(e.emp_no = d.emp_no, 'Manager', 'Employee') AS Position
FROM employees e LEFT JOIN dept_manager d USING (emp_no) WHERE emp_no > 109990;

/* 
Extract data set containing info about managers: emp_no, first, last. 
Add two columns: 
1. Showing the diff between the max and min salary
2. Whether the Salary raise was higher than 30000 or not
*/

SELECT dm.emp_no, e.first_name, e.last_name, 
MAX(s.salary) - MIN(s.salary) AS Salary_Diff,
IF(MAX(s.salary) - MIN(s.salary) > 30000, 'Yes', 'No') AS Salary_Raise
FROM dept_manager dm JOIN employees e USING (emp_no)
JOIN salaries s USING (emp_no) GROUP BY dm.emp_no;

/*
Extract emp_no, first, last, of first 100 employees.
Add 4th column called 'Current_Emp' = 'Still Employed'
If employee is still hired else = 'Not an employee anymore'
USE sysdate() gives you today's date
*/ -- employees

SELECT e.emp_no, e.first_name, e.last_name, 
IF(MAX(de.to_date)>sysdate(), 'Still Employed', 'Not an employee anymore')
AS Current_Employee
FROM employees e JOIN dept_emp de USING (emp_no) 
GROUP BY e.emp_no LIMIT 100;

-- ER: enter connected relationship, one to many has three prongs to one connection

/* SUB QUERIES

Single row between 0 and 1

Multiple row -> >1

Multple columns -> >1

Correlated subquery

Nested subquery

It can only be used with FROM, WHERE, and HAVING however, ORDER BY cannot be used within the subquery itself

*/ -- classicmodels

-- Write a query to the list of customer who has the highest payment amount

SELECT * FROM payments WHERE amount = (SELECT MAX(amount) FROM payments);

-- find the customers whose payments are greater than the avg payment

SELECT * FROM payments WHERE amount > (SELECT AVG(amount) FROM payments);

-- Query to find the max, min and avg no. of items in sale orders
-- In other words, how many orders was placed by the same orderNumber : use count and group by

SELECT ordernumber, COUNT(orderNumber) AS Count FROM orderdetails GROUP BY orderNumber;

SELECT MAX(Items) AS Max, MIN(Items) AS Min, AVG(Items) AS Avg
FROM (SELECT COUNT(orderNumber) AS Items FROM orderdetails GROUP BY orderNumber) AS LineItems;

-- Write a query to order the data with State as proirity, but if state is null, sort it by country
-- name, state, country

SELECT customerName, state, country
FROM customers ORDER BY 
(IF(state = null, country, state));

-- Write a query where it gives a list fo sales orders whose total values > 60k

SELECT orderNumber, SUM(priceEach * quantityordered) AS Total FROM orderdetails 
GROUP BY orderNumber HAVING Total > 60000;

-- Use subquery to find the customers who placed at least one sales order with total > 60K - EXISTS

SELECT customerName, customerNumber FROM customers WHERE EXISTS
(SELECT SUM(priceEach * quantityordered) AS Total FROM orderdetails
JOIN orders USING (ordernumber) 
WHERE customerNumber = customers.customerNumber
GROUP BY orderNumber HAVING Total > 60000);

/* IMPORTANT FUNCTIONS
Date Time, String, Math, Window

Date Time
SELECT now();
SELECT sysdate();
SELECT current_date();
SELECT current_time();

String
length(), lower(), 

*/ -- Sakila

SELECT payment_id, customer_id, EXTRACT(year FROM payment_date) as Year FROM payment;

/* 
Assign employee number 110022 as a manager to all employees from 10001 to 10020,
and employee number 110039 as a manager to all employees from 10021 to 10040.
Use union total of 40 rows
*/

SELECT emp_no FROM dept_manager WHERE emp_no = 110022;

SELECT e.emp_no AS Epmloyee_Id, de.dept_no AS Dept_Code, (SELECT emp_no FROM dept_manager WHERE emp_no = 110022) AS Manager_Id
FROM employees e JOIN dept_emp de ON e.emp_no = de.emp_no
WHERE e.emp_no <= 10020 GROUP BY e.emp_no ORDER BY e.emp_no;

-- Customers in USA, query should return 2 columns, customer name and state. (Customers = CA)
WITH customers_in_usa AS (SELECT customerName, state, country FROM customers WHERE country = 'USA')
SELECT customerName, state FROM customers_in_usa WHERE state = 'CA';

/*
There are sreveral repeated customer, create a new column which says "customerType",
display ordercount as well
if order count = 1 then 'One Time Customer
if 2 then "Repeat Customer"
if 3 then "Frequent Customer"
else "Loyal Customer"
*/

SELECT customerName, customerNumber, COUNT(*) AS ordercount FROM orders 
JOIN customers USING (customernumber) GROUP BY customerName;

WITH order_count AS (SELECT customerName, customerNumber, COUNT(*) AS ordercount FROM orders 
JOIN customers USING (customernumber) GROUP BY customerName)

-- Using Cases becomes helpful when adding a description to value 
SELECT customerName, orderCount,
CASE ordercount
	WHEN 1 THEN 'One Time Customer'
	WHEN 2 THEN 'Repeat Customer'
	WHEN 3 THEN 'Frequent Customer'
	ELSE 'Loyal Customer'
END Customer_Type FROM order_count ORDER BY customerName;