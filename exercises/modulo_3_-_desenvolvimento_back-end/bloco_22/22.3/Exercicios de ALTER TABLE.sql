USE hr;

-- 1 - Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.
SELECT * FROM locations;

ALTER TABLE locations RENAME COLUMN `STREET_ADDRESS` to `ADDRESS`;
ALTER TABLE locations RENAME COLUMN  `ADDRESS` TO `STREET_ADDRESS`; -- desfazendo

-- 2 - Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
SELECT * FROM regions;

ALTER TABLE regions RENAME COLUMN REGION_NAME TO REGION;
ALTER TABLE regions RENAME COLUMN REGION TO REGION_NAME; -- desfazendo

-- 3 - Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.
SELECT * FROM countries;

ALTER TABLE countries RENAME COLUMN COUNTRY_NAME TO COUNTRY;
ALTER TABLE countries RENAME COLUMN COUNTRY TO COUNTRY_NAME; -- desfazendo
