UPDATE [dbo].[application] 
SET [IdStatus]=@IdStatus
WHERE [IdApplication]=@IdApplication

SELECT [IdApplication]
       ,[IdStatus]=@IdStatus
FROM [dbo].[application]
WHERE [IdApplication]=@IdApplication