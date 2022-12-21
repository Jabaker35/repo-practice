use window1;

CREATE TABLE product
( 
    product_category varchar(255),
    brand varchar(255),
    product_name varchar(255),
    price int
);

INSERT INTO product VALUES
('Phone', 'Apple', 'iPhone 12 Pro Max', 1300),
('Phone', 'Apple', 'iPhone 12 Pro', 1100),
('Phone', 'Apple', 'iPhone 12', 1000),
('Phone', 'Samsung', 'Galaxy Z Fold 3', 1800),
('Phone', 'Samsung', 'Galaxy Z Flip 3', 1000),
('Phone', 'Samsung', 'Galaxy Note 20', 1200),
('Phone', 'Samsung', 'Galaxy S21', 1000),
('Phone', 'OnePlus', 'OnePlus Nord', 300),
('Phone', 'OnePlus', 'OnePlus 9', 800),
('Phone', 'Google', 'Pixel 5', 600),
('Laptop', 'Apple', 'MacBook Pro 13', 2000),
('Laptop', 'Apple', 'MacBook Air', 1200),
('Laptop', 'Microsoft', 'Surface Laptop 4', 2100),
('Laptop', 'Dell', 'XPS 13', 2000),
('Laptop', 'Dell', 'XPS 15', 2300),
('Laptop', 'Dell', 'XPS 17', 2500),
('Earphone', 'Apple', 'AirPods Pro', 280),
('Earphone', 'Samsung', 'Galaxy Buds Pro', 220),
('Earphone', 'Samsung', 'Galaxy Buds Live', 170),
('Earphone', 'Sony', 'WF-1000XM4', 250),
('Headphone', 'Sony', 'WH-1000XM4', 400),
('Headphone', 'Apple', 'AirPods Max', 550),
('Headphone', 'Microsoft', 'Surface Headphones 2', 250),
('Smartwatch', 'Apple', 'Apple Watch Series 6', 1000),
('Smartwatch', 'Apple', 'Apple Watch SE', 400),
('Smartwatch', 'Samsung', 'Galaxy Watch 4', 600),
('Smartwatch', 'OnePlus', 'OnePlus Watch', 220);

SELECT * FROM product;

-- A query to display the most expensive product under each category
SELECT * FROM (SELECT *, ROW_NUMBER() OVER(PARTITION BY product_category ORDER BY price DESC) AS rn FROM product) x WHERE rn < 2;

SELECT *, FIRST_VALUE(product_name) OVER(PARTITION BY product_category ORDER BY price DESC) most_exp_product FROM product;

-- Frame Clause
SELECT *, LAST_VALUE(product_name) 
OVER(PARTITION BY product_category ORDER BY price DESC
RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) 
least_exp_product FROM product;

SELECT *, LAST_VALUE(product_name) 
OVER(PARTITION BY product_category ORDER BY price DESC
RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) 
least_exp_product FROM product;

-- Query to find the sec_most_exp_product
SELECT *, NTH_VALUE(product_name, 2) 
OVER(PARTITION BY product_category ORDER BY price DESC
RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) 
sec_most_exp_product FROM product;

-- Find the first, last and nth value in a single query
SELECT *, 
FIRST_VALUE(product_name) OVER(PARTITION BY product_category ORDER BY price DESC
							RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) most_exp_product,
LAST_VALUE(product_name) OVER(PARTITION BY product_category ORDER BY price DESC
							RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) least_exp_product,
NTH_VALUE(product_name, 2) OVER(PARTITION BY product_category ORDER BY price DESC
							RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) sec_most_exp_product 
FROM product;

SELECT *,
FIRST_VALUE(product_name) OVER w AS most_exp_product,
LAST_VALUE(product_name) OVER w AS least_exp_product,
NTH_VALUE(product_name, 2) OVER w AS sec_exp_product
FROM product WINDOW w AS (PARTITION BY product_category ORDER BY price DESC
							RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING);
                            
-- Write a query to segregate all expensive, mid_range, and less_expensive phones
SELECT *,
NTILE(3) OVER (ORDER BY price DESC) AS bucket1
FROM product WHERE product_category = 'Phone';

SELECT x.product_name, x.brand, x.price, x.bucket1,
CASE x.bucket1
	WHEN 1 THEN 'Expensive Phones'
    WHEN 2 THEN 'Mid Range Phones'
    ELSE 'Less Expensive Phones'
END Phone_Category FROM
(SELECT *,
NTILE(3) OVER (ORDER BY price DESC) AS bucket1
FROM product WHERE product_category = 'Phone') x;