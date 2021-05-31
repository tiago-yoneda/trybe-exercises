USE sakila;
-- 1 - Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . 
-- Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.
CREATE VIEW film_with_category AS
    SELECT 
        f.title, f_c.category_id, c.name
    FROM
        film AS f
            INNER JOIN
        film_category AS f_c ON f.film_id = f_c.film_id
            INNER JOIN
        category AS c ON f_c.category_id = c.category_id
    ORDER BY f.title;
    
SELECT * FROM film_with_category;

-- 2 - Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , 
-- o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.
CREATE VIEW film_info AS
    SELECT 
        a.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS actor,
        f.title
    FROM
        actor AS a
            INNER JOIN
        film_actor AS f_a ON a.actor_id = f_a.actor_id
            INNER JOIN
        film AS f ON f_a.film_id = f.film_id
    ORDER BY actor;
    
-- 3 - Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , 
-- o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades.
CREATE VIEW address_info AS
    SELECT 
        a.address_id, a.address, a.district, a.city_id, c.city
    FROM
        address AS a
            INNER JOIN
        city AS c ON a.city_id = c.city_id
    ORDER BY c.city;
    
-- 4 - Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . 
-- Sua view deve exibir o título do filme , o id do idioma e o idioma do filme.
CREATE VIEW movies_languages AS
    SELECT 
        f.title, f.language_id, l.name
    FROM
        film AS f
            INNER JOIN
        `language` AS l ON f.language_id = l.language_id
    ORDER BY f.title;
