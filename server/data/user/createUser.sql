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
    @Surname,
    @Name,
    @Patronymic,
    @Photo,
    @Login,
    @Password,
    @IdRole
)

