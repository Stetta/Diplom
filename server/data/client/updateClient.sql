UPDATE [dbo].[client] 
SET [Surname]=@Surname,
    [Name]=@Name,
    [Patronymic]=@Patronymic,
    [Photo]=@Photo,
    [Mail]=@Mail,
    [Password]=@Password,
    [RegistrationDate]=@RegistrationDate,
    [IdStatusDelete]=@IdStatusDelete
WHERE [IdClient]=@IdClient

SELECT [IdClient]
       ,[Surname]
       ,[Name]
       ,[Patronymic]
       ,[Photo]
       ,[Mail]
       ,[Password]
       ,[RegistrationDate]
       ,[IdStatusDelete]
FROM [dbo].[client]
WHERE [IdClient]=@IdClient