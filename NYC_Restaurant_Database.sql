--Remove index column from inspection table
SELECT * From inspection;
ALTER TABLE inspection
DROP COLUMN index; 

--Remove index column from income table
SELECT * From income;
ALTER TABLE income
DROP COLUMN index; 


