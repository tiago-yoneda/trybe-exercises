USE PiecesProviders;

SELECT 'Exercicio 1';
SELECT * FROM Providers
ORDER BY Name DESC LIMIT 1;

SELECT 'Exercicio 2';
SELECT * FROM Provides
ORDER BY Price DESC LIMIT 5;

SELECT 'Exercicio 3';
SELECT Provider, Price FROM Provides
ORDER BY Price DESC LIMIT 4 OFFSET 3;

SELECT 'Exercicio 4';
SELECT CONCAT('A peça mais cara é a: ', Piece, ' provida pela empresa ', Provider, ' e custa ', Price, ' reais.') AS text FROM Provides 
ORDER BY Price DESC LIMIT 1;