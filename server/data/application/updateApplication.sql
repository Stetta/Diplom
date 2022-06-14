UPDATE [dbo].[application] 
SET [Description]=@Description,
    [IdClient]=@IdClient,
    [IdUser]=@IdUser,
    [IdStatus]=@IdStatus,
    [IdStatusPayment]=@IdStatusPayment,
    [IdType]=@IdType,
    [Date]=@Date
WHERE [IdApplication]=@IdApplication

SELECT [IdApplication]
       ,[Description]
       ,[IdClient]
       ,[IdUser]
       ,[IdStatus]=@IdStatus
       ,[IdStatusPayment]=@IdStatusPayment
       ,[IdType]=@IdType
       ,[Date]=@Date
FROM [dbo].[application]
WHERE [IdApplication]=@IdApplication