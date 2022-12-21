-- Some function in MySQL

use Sakila;

SELECT now();
SELECT sysdate();
SELECT current_date();
SELECT current_time();

-- Date Functions

/*Name			Description
CURDATE			Returns the current date.
DATEDIFF		Calculates the number of days between two DATE values.
DAY				Gets the day of the month of a specified date.
DATE_ADD		Adds a time value to date value.
DATE_SUB		Subtracts a time value from a date value.
DATE_FORMAT		Formats a date value based on a specified date format.
DAYNAME			Gets the name of a weekday for a specified date.
DAYOFWEEK		Returns the weekday index for a date.
EXTRACT			Extracts a part of a date.
LAST_DAY		Returns the last day of the month of a specified date
NOW				Returns the current date and time at which the statement executed.
MONTH			Returns an integer that represents a month of a specified date.
STR_TO_DATE		Converts a string into a date and time value based on a specified format.
SYSDATE			Returns the current date.
TIMEDIFF		Calculates the difference between two TIME or DATETIME values.
TIMESTAMPDIFF	Calculates the difference between two DATE or DATETIME values.
WEEK			Returns a week number of a date.
WEEKDAY			Returns a weekday index for a date.
YEAR			Return the year for a specified date
*/

-- String Functions

/*Name			Description
CONCAT			Concatenate two or more strings into a single string
INSTR			Return the position of the first occurrence of a substring in a string
LENGTH			Get the length of a string in bytes and in characters
LEFT			Get a specified number of leftmost characters from a string
LOWER			Convert a string to lowercase
LTRIM			Remove all leading spaces from a string
REPLACE			Search and replace a substring in a string
RIGHT			Get a specified number of rightmost characters from a string
RTRIM			Remove all trailing spaces from a string
SUBSTRING		Extract a substring starting from a position with a specific length.
SUBSTRING_INDEX	Return a substring from a string before a specified number of occurrences of a delimiter
TRIM			Remove unwanted characters from a string.
FIND_IN_SET		Find a string within a comma-separated list of strings
FORMAT			Format a number with a specific locale, rounded to the number of decimals
UPPER			Convert a string to uppercase
*/

-- Maths Functions 

/*Name		Description
ABS()		Returns the absolute value of a number
CEIL()		Returns the smallest integer value greater than or equal to the input number (n).
FLOOR()		Returns the largest integer value not greater than the argument
MOD()		Returns the remainder of a number divided by another
ROUND()		Rounds a number to a specified number of decimal places.
TRUNCATE()	Truncates a number to a specified number of decimal places
ACOS(n)		Returns the arc cosine of n or null if n is not in the range -1 and 1.
ASIN(n)		Returns the arcsine of n which is the value whose sine is n. It returns null if n is not in the range -1 to 1.
ATAN()		Returns the arctangent of n.
ATAN2(n,m) or ATAN(m,n)	Returns the arctangent of the two variables n and m
CONV(n,from_base,to_base)	Converts a number between different number bases
COS(n)		Returns the cosine of n, where n is in radians
COT(n)		Returns the cotangent of n.
CRC32()		Computes a cyclic redundancy check value and returns a 32-bit unsigned value
DEGREES(n)	Converts radians to degrees of the argument n
EXP(n)		Raises to the power of e raised to the power of n
LN(n)		Returns the natural logarithm of n
LOG(n)		Returns the natural logarithm of the first argument
LOG10()		Returns the base-10 logarithm of the argument
LOG2()		Returns the base-2 logarithm of the argument
PI()		Returns the value of PI
POW()		Returns the argument raised to the specified power
POWER()		Returns the argument raised to the specified power
RADIANS()	Returns argument converted to radians
RAND()		Returns a random floating-point value
SIGN(n)		Returns the sign of n that can be -1, 0, or 1 depending on whether n is negative, zero, or positive.
SIN(n)		Returns the sine of n
SQRT(n)		Returns the square root of n
TAN(n)		Returns the tangent of n
*/

-- Common Table Expressions

/*
Holds a temporary table without using any memory just like a variable
Remember to use the WITH clause before SELECT clause
*/

CREATE DATABASE cte;
USE cte;

CREATE TABLE emp
(emp_Id int, emp_Name VARCHAR(50), salary int);

INSERT INTO emp values (101, 'Mohan', 40000);
INSERT INTO emp values (102, 'James', 50000);
INSERT INTO emp values (103, 'Robin', 60000);
INSERT INTO emp values (104, 'Carol', 70000);
INSERT INTO emp values (105, 'Alice', 80000);
INSERT INTO emp values (106, 'Jimmy', 90000);

SELECT * FROM emp;

SELECT * FROM emp e WHERE e.salary > (SELECT AVG(salary) FROM emp);

WITH average_salary (avg_salary) AS (SELECT ROUND(AVG(salary)) FROM emp)
SELECT * FROM emp e, average_salary av WHERE e.salary > av.avg_salary;

/*
Find stores whose sales were better than the avg sales cross all stores
1. Total sales for each store
2. Find out the avg sales with respect to all stores
3. Stores where total sales > avg sales
*/

SELECT s.store_id, SUM(s.quantity * s.cost) AS total_sales FROM sales s GROUP BY s.store_id;

SELECT ROUND(AVG(total_sales)) AS Avg_Sales FROM (SELECT SUM(quantity * cost) AS total_sales FROM sales GROUP BY store_id);

SELECT * FROM 
(SELECT s.store_id, SUM(s.quantity * s.cost) 
AS total_sales_per_store FROM sales s GROUP BY s.store_id) total_sales
JOIN
(SELECT ROUND(AVG(total_sales)) AS Avg_Sales FROM 
(SELECT SUM(s.quantity * s.cost) AS total_sales 
FROM sales s GROUP BY s.store_id) avg_sales) avg_sales
on total_sales.total_sales_per_store > avg_sales.Avg_Sales;

WITH Total_Sales AS (SELECT s.store_id, s.store_name, SUM(s.quantity * s.cost) 
AS total_sales_per_store FROM sales s GROUP BY s.store_id),
Avg_Sales AS (SELECT ROUND(AVG(total_sales_per_store)) Avg_Sales FROM Total_Sales)
SELECT * FROM Total_Sales JOIN Avg_Sales 
ON Total_Sales.total_sales_per_store > Avg_Sales.Avg_Sales;

-- Window Functions or Analytical Functions
