SELECT * FROM inspection;
SELECT * FROM income;

-- FULL OUT JOIN OF BOTH TABLES
SELECT *
INTO NewTable
FROM inspection
FULL OUTER JOIN income
ON inspection.index=income.index_2;

SELECT * FROM newtable;
