USE Pixar;
SET SQL_SAFE_UPDATES = 0;
-- Para realizar os exercícios 8 a 10, faça os exercícios anteriores (1 a 7) e utilize o banco de dados Pixar .

-- Exercício 1 : Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
SELECT * FROM BoxOffice
WHERE domestic_sales > 400000000;

UPDATE BoxOffice
SET rating = 9
WHERE domestic_sales > 400000000;

-- Exercício 2 : Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
UPDATE BoxOffice
SET rating = 6
WHERE domestic_sales < 300000000 AND international_sales > 200000000;

-- Exercício 3 : Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
SELECT * FROM Movies
WHERE length_minutes < 100;
-- id 1 6 7 8

SELECT * FROM BoxOffice;
DELETE FROM BoxOffice
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM Movies
WHERE length_minutes < 100;