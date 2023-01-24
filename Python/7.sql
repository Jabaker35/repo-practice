-- Window Functions or Analytical functions

create DATABASE window1;
USE window1;

CREATE TABLE sales(
    sales_employee VARCHAR(50) NOT NULL,
    fiscal_year INT NOT NULL,
    sale DECIMAL(14,2) NOT NULL,
    PRIMARY KEY(sales_employee,fiscal_year)
);

INSERT INTO sales(sales_employee,fiscal_year,sale)
VALUES('Bob',2016,100),
      ('Bob',2017,150),
      ('Bob',2018,200),
      ('Alice',2016,150),
      ('Alice',2017,100),
      ('Alice',2018,200),
       ('John',2016,200),
      ('John',2017,150),
      ('John',2018,250);
      
SELECT * FROM sales;
      
SELECT SUM(sale) AS total_sales FROM sales;
      
SELECT sales_employee, fiscal_year, sale, 
SUM(sale) OVER (PARTITION BY sales_employee) AS total_sales FROM sales;