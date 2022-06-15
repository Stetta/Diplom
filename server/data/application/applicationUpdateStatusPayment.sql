UPDATE [dbo].[application] 
SET [IdStatusPayment]=@IdStatusPayment
WHERE [IdApplication]=@IdApplication

SELECT [IdApplication]
       ,[IdStatusPayment]=@IdStatusPayment
FROM [dbo].[application]
WHERE [IdApplication]=@IdApplication