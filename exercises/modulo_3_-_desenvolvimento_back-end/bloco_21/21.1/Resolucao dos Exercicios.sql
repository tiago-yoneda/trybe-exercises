USE hr;
-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT 
    EMPLOYEE_ID, MAX(SALARY) AS salario_maximo
FROM
    employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT 
    (MAX(SALARY) - MIN(SALARY)) AS diferenca_bruta
FROM
    employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT 
    JOB_ID, ((MIN_SALARY + MAX_SALARY) / 2) AS media_salarial
FROM
    jobs
ORDER BY media_salarial;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT 
    SUM(SALARY) AS gasto_total
FROM
    employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
	ROUND(MIN(SALARY),2) AS menor_salario,
    ROUND(MAX(SALARY),2) AS maior_salario,
    ROUND(SUM(SALARY),2) AS soma_dos_salarios,
    ROUND(AVG(SALARY),2) AS media_dos_salarios
FROM employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT * FROM employees;
SELECT JOB_ID, COUNT(*) FROM employees
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID;

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT 
    JOB_ID,
    SUM(SALARY) AS gasto_por_area,
    COUNT(*) AS quantidade_por_area
FROM
    employees
GROUP BY JOB_ID
ORDER BY gasto_por_area;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID,
    SUM(SALARY) AS gasto_por_area,
    COUNT(*) AS quantidade_por_area
FROM
    employees
WHERE
    JOB_ID = 'IT_PROG'
GROUP BY JOB_ID
ORDER BY gasto_por_area;

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID, AVG(SALARY) AS media_salarial
FROM
    employees
WHERE
    JOB_ID != 'IT_PROG'
GROUP BY JOB_ID
ORDER BY media_salarial DESC;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT 
    DEPARTMENT_ID,
    COUNT(*) AS numero_de_funcionarios,
    ROUND(AVG(SALARY), 2) AS media_salarial
FROM
    employees
GROUP BY DEPARTMENT_ID
HAVING numero_de_funcionarios > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
UPDATE employees 
SET 
    PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE
    LEFT(PHONE_NUMBER, 3) = 515;

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT 
    *
FROM
    employees
WHERE
    LENGTH(FIRST_NAME) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT 
    EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) AS HIRE_YEAR
FROM
    employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT 
    EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) AS HIRE_DAY
FROM
    employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT 
    EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) AS HIRE_MONTH
FROM
    employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT 
    UCASE(FIRST_NAME)
FROM
    employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT 
    LAST_NAME, HIRE_DATE
FROM
    employees
HAVING HIRE_DATE LIKE '1987-07%';

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT 
    FIRST_NAME,
    LAST_NAME,
    DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS DAYS_AS_EMPLOYEE
FROM
    employees
ORDER BY DAYS_AS_EMPLOYEE;
