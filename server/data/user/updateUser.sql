UPDATE [dbo].[user] 
SET [Surname]=@Surname,
    [Name]=@Name,
    [Patronymic]=@Patronymic,
    [Photo]=@Photo,
    [Login]=@Login,
    [Password]=@Password,
    [IdRole]=@IdRole
WHERE [IdUser]=@IdUser

SELECT [IdUser]
       ,[Surname]
       ,[Name]
       ,[Patronymic]
       ,[Photo]
       ,[Login]
       ,[Password]
       ,[IdRole]
FROM [dbo].[user]
WHERE [IdUser]=@IdUser
    