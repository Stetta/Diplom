INSERT INTO [dbo].[user]
    (
        [Surname],
        [Name],
        [Patronymic],
        [Photo],
        [Login],
        [Password],
        [IdRole]
    )
VALUES (
    @userSurname,
    @userName,
    @userPatronymic,
    @userPhoto,
    @userLogin,
    @userPassword,
    @userIdRole
)

