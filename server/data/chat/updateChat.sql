UPDATE [dbo].[chat] 
SET [Date]=@Date,
    [IdUser]=@IdUser,
    [IdClient]=@IdClient,
    [IdApplication]=@IdApplication,
    [Text]=@Text,
    [Photo]=@Photo
WHERE [IdChat]=@IdChat

SELECT [IdChat]
       ,[Date]
       ,[IdUser]
       ,[IdClient]
       ,[IdApplication]
       ,[Text]
       ,[Photo]
FROM [dbo].[chat]
WHERE [IdChat]=@IdChat
