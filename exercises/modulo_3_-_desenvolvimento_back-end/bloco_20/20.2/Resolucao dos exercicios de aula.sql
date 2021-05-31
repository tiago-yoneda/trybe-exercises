USE Scientists;

SELECT 'exercicio 1';
SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 'exercicio 2';
SELECT 10 AS N1, 15 AS N2,50 AS N3;

SELECT 'exercicio 3';
SELECT 10 + 15;

SELECT 'exercicio 4'; 
SELECT 49 * 17 AS resultado;

SELECT 'exercicio 5';
SELECT * FROM Scientists;

SELECT 'exercicio 6';
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

SELECT 'exercicio 7';
SELECT Name FROM Scientists 
ORDER BY Name;

SELECT 'exercicio 8';
SELECT `Name` FROM Projects
ORDER BY `Name`;

SELECT 'exercicio 9';
SELECT CONCAT('O projeto ',`Name`, ' precisou de ', `Hours`, ' horas para ser concluido') AS Texto FROM Projects;

SELECT 'exercicio 10';
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;

SELECT 'exercicio 11';
SELECT  DISTINCT Project FROM AssignedTo;

SELECT 'exercicio 12';
SELECT Name FROM Projects
ORDER BY Hours DESC LIMIT 1;

SELECT 'exercicio 13';
SELECT Name, Hours FROM Projects
ORDER BY Hours;

SELECT Name FROM Projects 
ORDER BY Hours LIMIT 1 OFFSET 1;

SELECT 'exercicio 14';
SELECT * FROM Projects
ORDER BY Hours LIMIT 5;

SELECT 'exercicio 15';
SELECT * FROM Scientists;
SELECT CONCAT('Existem ', COUNT(DISTINCT Name), ' cientistas na tabela Scientists') AS data FROM Scientists;