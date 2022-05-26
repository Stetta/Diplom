SELECT * FROM [dbo].[client]
WHERE IdClient = (SELECT MAX(IdClient) as "IdCient" FROM [dbo].[client])