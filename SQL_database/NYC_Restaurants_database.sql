--View Tables
SELECT * FROM income3;
SELECT * FROM inspection3;
SELECT * FROM newtable4;
SELECT * FROM newtable5;

--InnerJoin of databases
SELECT c."DBA", c."STREET", c."INCOME_LEVEL", s."Borough", s."ZIPCODE" s."CUISINE_DESCRIPTION", s."SCORE", s."GRADE"
INTO newtable4
FROM income3 c
INNER JOIN inspection3 s
ON c."DBA" = s."DBA" and c."STREET" = s."STREET";

--SELECT DISTINCT to remove duplicate rows
SELECT DISTINCT "DBA", "STREET", "INCOME_LEVEL", "Borough", "CUISINE_DESCRIPTION", "SCORE", "GRADE"
INTO newtable5
FROM newtable4;

--Count number of rows
SELECT
COUNT(*)
FROM newtable5;

