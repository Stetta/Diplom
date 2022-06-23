SELECT [Application].IdApplication, [Application].[Date], [Status].[IdStatus] as [Status], [Status].[Name] as [StatusName],
 [StatusPayment].[IdStatusPayment] as [StatusPayment], [StatusPayment].[Name] as [StatusPaymentName],
 [Type].[Name] AS [Type], [Application].[Description], Client.Surname+' '+Client.Name as "Client",
 [Pricing].Name as 'Pricing', [Staff].Name as 'Staff', [Application].[Name] as 'CompanyName', [Application].[Activity]
FROM [dbo].[application]
INNER JOIN Client on [Application].IdClient = Client.IdClient 
INNER JOIN [Type] on [Type].IdType = [Application].IdType
INNER JOIN [Status] on [Application].IdStatus = [Status].IdStatus 
INNER JOIN StatusPayment on [Application].IdStatusPayment = StatusPayment.IdStatusPayment
INNER JOIN Staff on [Application].IdStaff = Staff.IdStaff
INNER JOIN Pricing on [Application].IdPricing = Pricing.IdPricing
WHERE [Application].IdClient=@IdClient ORDER BY [Application].[Date] DESC
