UPDATE [dbo].[chat] 
SET [Date]=@Date,
    [IdStatus]=@IdStatus,
    [IdUser]=@IdUser,
    [IdClient]=@IdClient,
    [IdApplication]=@IdApplication,
    [Text]=@Text,
    [Photo]=@Photo,
    [IdStatusPayment]=@IdStatusPayment
WHERE [IdChat]=@IdChat

SELECT [IdChat]
       ,[Date]
       ,[IdStatus]
       ,[IdUser]
       ,[IdClient]
       ,[IdApplication]
       ,[Text]
       ,[Photo]
       ,[IdStatusPayment]
FROM [dbo].[chat]
WHERE [IdChat]=@IdChat
