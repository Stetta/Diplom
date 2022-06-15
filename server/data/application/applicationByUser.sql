SELECT [Application].IdApplication, [User].IdUser, [Status].[IdStatus] as [Status], [StatusPayment].[IdStatusPayment] as [StatusPayment], [User].Surname+' '+[User].[Name] as [User],
 [Application].[Date], [Type].[Name] AS [Type], [Application].[Description],
 Client.Mail as [Mail], Client.Surname+' '+Client.Name as "Client" 
FROM [dbo].[application]
INNER JOIN Client on [Application].IdClient = Client.IdClient 
INNER JOIN [Type] on [Application].IdType = [Type].IdType 
INNER JOIN [User] on [Application].IdUser = [User].IdUser
INNER JOIN [Status] on [Application].IdStatus = [Status].IdStatus 
INNER JOIN StatusPayment on [Application].IdStatusPayment = StatusPayment.IdStatusPayment
WHERE [Application].IdUser=@IdUser ORDER BY [Application].[Date] DESC