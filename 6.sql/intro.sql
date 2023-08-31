-- department TABLE
-- each department has many employee
CREATE TABLE Department(
  deptID SERIAL PRIMARY KEY,
  deptName VARCHAR(50)
);

INSERT into Department values (1, 'It');
SELECT * from Department;

-- Employee TABLE
-- each employee belongs to a department
CREATE TABLE Employee(
  empID SERIAL PRIMARY KEY,
  empName VARCHAR(50) NOT NULL,
  departmentID INT,
  CONSTRAINT fk_constraint_dept
    FOREIGN KEY (departmentID)
    REFERENCES Department(deptID)
)

INSERT INTO Employee values (1, 'Fahim', 1);

SELECT * FROM Employee;