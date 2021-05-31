USE Pixar;

-- 1 - Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( internationa_sales ) de cada filme.
SELECT 
	M.title, B.domestic_sales, B.international_sales
FROM
    Movies AS M
        INNER JOIN
    BoxOffice AS B ON M.id = B.movie_id;

-- 2 - Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais 
-- ( internationa_sales ) do que vendas nacionais ( domestic_sales ).
SELECT 
    M.title, B.domestic_sales, B.international_sales
FROM
    Movies AS M
        INNER JOIN
    BoxOffice AS B ON M.id = B.movie_id
WHERE
    B.domestic_sales < B.international_sales
;
-- 3 - Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT 
    M.title, B.rating
FROM
    Movies AS M
        INNER JOIN
    BoxOffice AS B ON M.id = B.movie_id
    ORDER BY B.rating DESC;

-- 4 - Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, 
-- os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM Theater;
SELECT * FROM Movies;

SELECT 
    T.*, M.*
FROM
    Theater AS T
        LEFT JOIN
    Movies AS M ON T.id = M.theater_id
ORDER BY T.name;

-- 5 - Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, 
-- os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    T.*, M.*
FROM
    Theater AS T
        RIGHT JOIN
    Movies AS M ON T.id = M.theater_id
ORDER BY T.name;

-- 6 - Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

-- INNER JOIN
SELECT 
    M.title
FROM
    Movies AS M
        INNER JOIN
    BoxOffice AS B ON M.id = B.movie_id
WHERE
    B.rating > 7.5;

-- SUBQUERY
SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);

-- 7 - Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

-- INNER JOIN
SELECT 
    B.rating
FROM
    BoxOffice AS B
        INNER JOIN
    Movies AS M ON M.Id = B.movie_id
WHERE
    M.year > 2009;
    
-- SUBQUERY
SELECT 
    rating
FROM
    BoxOffice
WHERE
    movie_id IN (SELECT 
            id
        FROM
            Movies
        WHERE
            year > 2009);

-- 8 - Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT `name`, location FROM Theater AS T
WHERE EXISTS (
	SELECT * FROM Movies AS M
    WHERE T.id = M.theater_id
);

-- 9 - Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT `name`, location FROM Theater AS T
WHERE NOT EXISTS (
	SELECT * FROM Movies AS M
    WHERE T.id = M.theater_id
);