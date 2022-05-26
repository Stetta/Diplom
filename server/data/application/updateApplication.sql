UPDATE [dbo].[application] 
SET [Description]=@Description,
    [IdClient]=@IdClient,
    [IdUser]=@IdUser
WHERE [IdApplication]=@IdApplication

SELECT [IdApplication]
       ,[Description]
       ,[IdClient]
       ,[IdUser]
FROM [dbo].[application]
WHERE [IdApplication]=@IdApplication