USE Pixar;

-- Bonus 1 - Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.
SELECT 
    M.*
FROM
    Movies AS M
        INNER JOIN
    BoxOffice AS B ON M.id = B.movie_id
WHERE
    B.rating > 8;

-- Bonus 2 - Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT T1.title, T1.length_minutes, T2.title, T2.length_minutes
FROM Movies AS T1, Movies AS T2
WHERE T1.director = T2.director AND T1.title <> T2.title;

-- Bonus 3 - Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, 
-- e que possuem duração maior que 110 minutos.

-- INNER JOIN
SELECT 
    title
FROM
    Movies AS M
        INNER JOIN
    BoxOffice AS B ON M.id = B.movie_id
WHERE
    B.international_sales > 500000000
        AND M.length_minutes > 110;

-- SUBQUERY
SELECT M.title
FROM Movies AS M
WHERE M.id IN (
	SELECT B.movie_id FROM BoxOffice AS B
	WHERE B.international_sales >= 500000000
) AND M.length_minutes > 110;
