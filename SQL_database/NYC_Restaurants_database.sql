--View table
SELECT * FROM newtable5;


--InnerJoin of databases
SELECT c."DBA", c."STREET", c."INCOME_LEVEL", s."Borough", s."CUISINE_DESCRIPTION", s."SCORE", s."GRADE"
INTO newtable4
FROM income3 c
INNER JOIN inspection3 s
ON c."DBA" = s."DBA" and c."STREET" = s."STREET";

--Count number of rows
SELECT
COUNT(*)
FROM newtable5;

--SELECT DISTINCT to remove duplicate rows
SELECT DISTINCT "DBA", "STREET", "INCOME_LEVEL", "Borough", "CUISINE_DESCRIPTION", "SCORE", "GRADE"
INTO newtable5
FROM newtable4;
