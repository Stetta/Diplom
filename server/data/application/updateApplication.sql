UPDATE [dbo].[application] 
SET [Name]=@Name,
    [Description]=@Description,
    [IdClient]=@IdClient,
    [IdUser]=@IdUser
WHERE [IdApplication]=@IdApplication

SELECT [IdApplication]
       ,[Name]
       ,[Description]
       ,[IdClient]
       ,[IdUser]
FROM [dbo].[application]
WHERE [IdApplication]=@IdApplication