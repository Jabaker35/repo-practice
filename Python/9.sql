create table employee
( emp_ID int
, emp_NAME varchar(50)
, DEPT_NAME varchar(50)
, SALARY int);

insert into employee values(101, 'Alice', 'Admin', 4000);
insert into employee values(102, 'John', 'HR', 3000);
insert into employee values(103, 'Akbar', 'IT', 4000);
insert into employee values(104, 'Dorvin', 'Finance', 6500);
insert into employee values(105, 'James', 'HR', 3000);
insert into employee values(106, 'Robin',  'Finance', 5000);
insert into employee values(107, 'Carol', 'HR', 7000);
insert into employee values(108, 'Maryam', 'Admin', 4000);
insert into employee values(109, 'Sanjay', 'IT', 6500);
insert into employee values(110, 'Jimmy', 'IT', 7000);
insert into employee values(111, 'Melinda', 'IT', 8000);
insert into employee values(112, 'Jean', 'IT', 10000);
insert into employee values(113, 'Peter', 'Admin', 2000);
insert into employee values(114, 'Manisha', 'HR', 3000);
insert into employee values(115, 'Jonas', 'IT', 4500);
insert into employee values(116, 'Roland', 'Finance', 6500);
insert into employee values(117, 'Diego', 'HR', 3500);
insert into employee values(118, 'Jeff', 'Finance', 5500);
insert into employee values(119, 'Cory', 'HR', 8000);
insert into employee values(120, 'Monica', 'Admin', 5000);
insert into employee values(121, 'Rosalin', 'IT', 6000);
insert into employee values(122, 'Ibrahim', 'IT', 8000);
insert into employee values(123, 'kelvin', 'IT', 8000);
insert into employee values(124, 'Dheeraj', 'IT', 11000);

SELECT * FROM employee;

-- Find the max salary with respect to departments

SELECT DEPT_NAME, MAX(SALARY) AS Salary FROM employee GROUP BY DEPT_NAME;
SELECT *, MAX(SALARY) OVER (PARTITION BY DEPT_NAME) AS Max_Salary FROM employee;

SELECT *, ROW_NUMBER() OVER(PARTITION BY DEPT_NAME ORDER BY SALARY) AS 'Row#' FROM employee;

-- Fetch the first two employees from each dept to join the company
SELECT * FROM (SELECT *, ROW_NUMBER() OVER(PARTITION BY DEPT_NAME ORDER BY emp_ID) AS rn
FROM employee) x WHERE rn < 3;

-- Fetch the top 3 emp in each dept earning the most salary
SELECT * FROM (SELECT *, DENSE_RANK() OVER(PARTITION BY DEPT_NAME ORDER BY SALARY DESC) AS salary_ranks
FROM employee) x WHERE salary_ranks < 2;

-- Row Number, Rank, and Dense Rank
SELECT *, 
ROW_NUMBER() OVER(PARTITION BY DEPT_NAME ORDER BY SALARY DESC) AS rn,
RANK() OVER(PARTITION BY DEPT_NAME ORDER BY SALARY DESC) AS salary_rank,
DENSE_RANK() OVER(PARTITION BY DEPT_NAME ORDER BY SALARY DESC) AS salary_dense_ranks
FROM employee;

-- Lead and Lag mostly used to forecast by time series
SELECT *, LEAD(SALARY) OVER(PARTITION BY DEPT_NAME ORDER BY SALARY DESC) AS lead_disp,
LAG(SALARY) OVER(PARTITION BY DEPT_NAME ORDER BY SALARY DESC) AS lag_disp
FROM employee;