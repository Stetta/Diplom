SELECT [Application].IdApplication, [Application].[Date], [Type].[Name] AS [Type], [Application].[Description], Client.Surname+' '+Client.Name as "Client" 
FROM [dbo].[application]
INNER JOIN Client on [Application].IdClient = Client.IdClient 
INNER JOIN Type on [Type].IdType = [Application].IdType
WHERE [Application].IdClient=@IdClient
