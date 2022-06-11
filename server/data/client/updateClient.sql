UPDATE [dbo].[client] 
SET [Surname]=@Surname,
    [Name]=@Name,
    [Patronymic]=@Patronymic,
    [Photo]=@Photo,
    [Mail]=@Mail,
    [Password]=@Password
WHERE [IdClient]=@IdClient

SELECT [IdClient]
       ,[Surname]
       ,[Name]
       ,[Patronymic]
       ,[Photo]
       ,[Mail]
       ,[Password]
       ,[RegistrationDate]
FROM [dbo].[client]
WHERE [IdClient]=@IdClient