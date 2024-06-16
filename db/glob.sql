IF DB_ID('TestDB') IS NULL
BEGIN
    CREATE DATABASE TestDB;
END
GO

USE TestDB;
GO


IF OBJECT_ID('subdivisions', 'U') IS NULL
BEGIN
    CREATE TABLE subdivisions (
        id INT PRIMARY KEY,
        name NVARCHAR(255),
        parent_id INT
    );
END
GO

IF OBJECT_ID('collaborators', 'U') IS NULL
BEGIN
    CREATE TABLE collaborators (
        id INT PRIMARY KEY,
        name NVARCHAR(255),
        subdivision_id INT,
        age INT
    );
END
GO


TRUNCATE TABLE collaborators;
TRUNCATE TABLE subdivisions;


INSERT INTO subdivisions (id, name, parent_id) VALUES
(1, N'Главное подразделение', NULL),
(2, N'Подразделение 1', 1),
(3, N'Подразделение 2', 1),
(100055, N'Исключенное подразделение 1', 1),
(100059, N'Исключенное подразделение 2', 1),
(4, N'Подразделение 1.1', 2),
(5, N'Подразделение 2.1', 3);

INSERT INTO collaborators (id, name, subdivision_id, age) VALUES
(710253, N'Сотрудник 1', 1, 35),
(710254, N'Сотрудник 2', 2, 28),
(710255, N'Сотрудник 3', 3, 42),
(710256, N'Сотрудник 4', 4, 38),
(710257, N'Сотрудник 5', 5, 30);
GO


WITH RecursiveCTE AS (
    SELECT id, name, parent_id, 0 AS level
    FROM subdivisions
    WHERE id = (SELECT subdivision_id FROM collaborators WHERE id = 710253)
    
    UNION ALL
    
    SELECT s.id, s.name, s.parent_id, r.level + 1
    FROM subdivisions s
    JOIN RecursiveCTE r ON s.parent_id = r.id
    WHERE s.id NOT IN (100055, 100059)
),
CollaboratorData AS (
    SELECT c.id, c.name, c.subdivision_id, s.name AS sub_name, r.level,
           COUNT(c2.id) OVER (PARTITION BY c.subdivision_id) AS colls_count
    FROM collaborators c
    JOIN RecursiveCTE r ON c.subdivision_id = r.id
    JOIN subdivisions s ON c.subdivision_id = s.id
    JOIN collaborators c2 ON c.subdivision_id = c2.subdivision_id
    WHERE c.age < 40
)
SELECT id, name, sub_name, subdivision_id AS sub_id, level AS sub_level, colls_count
FROM CollaboratorData
ORDER BY sub_level ASC;
