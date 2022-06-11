SELECT [Application].IdApplication, [Application].[Date], [Application].[Description], Client.Surname+' '+Client.Name as "Client" 
FROM [dbo].[application]
INNER JOIN Client on [Application].IdClient = Client.IdClient 
WHERE [Application].IdClient=@IdClient
