USE sakila;
-- 1 - Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name . 
-- Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores.
-- Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE FULLTEXT INDEX exerc_1 ON category(name);

-- Após ter criado o índice, mensure o custo com a seguinte query: 0.35
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX exerc_1 ON category;

-- Após ter excluído o índice, mensure o custo com a seguinte query: 1.85
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- 2 - Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . 
-- Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. 
-- Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE INDEX exerc_2 ON address(postal_code);

DROP INDEX exerc_2 ON address;

-- Mensure o custo com a seguinte query: 0.95 - 65.40
SELECT *
FROM sakila.address
WHERE postal_code = '36693';

