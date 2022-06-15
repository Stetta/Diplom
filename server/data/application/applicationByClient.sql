SELECT [Application].IdApplication, [Application].[Date], [Status].[IdStatus] as [Status], [StatusPayment].[IdStatusPayment] as [StatusPayment],
 [Type].[Name] AS [Type], [Application].[Description], Client.Surname+' '+Client.Name as "Client" 
FROM [dbo].[application]
INNER JOIN Client on [Application].IdClient = Client.IdClient 
INNER JOIN [Type] on [Type].IdType = [Application].IdType
INNER JOIN [Status] on [Application].IdStatus = [Status].IdStatus 
INNER JOIN StatusPayment on [Application].IdStatusPayment = StatusPayment.IdStatusPayment
WHERE [Application].IdClient=@IdClient ORDER BY [Application].[Date] DESC
